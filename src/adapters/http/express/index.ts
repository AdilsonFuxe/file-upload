import express, {Router} from 'express';
import cors from 'cors';
import multerConfig from '../../../config/multer'
import multer from 'multer';
import {deleteUploadFileById, loadUploadFileById, loadUploadFiles, uploadFile} from "../../../core/usecases";
import {
  uploadFileRepository,
  loadUploadFilesRepository,
  loadUploadFileByIdRepository,
  deleteUploadFileByIdRepository
} from "../../db/mongoose/repositories";
import {resolve} from "path";
import env from "../../../config/env";
import {MongoHelper} from "../../db/mongoose/helpers";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());
app.use(
  '/api/v1/files',
  express.static(resolve(__dirname, '..', '..', '..', '..', 'storage/uploads'))
);

app.post('/api/v1/files', multer(multerConfig).single('file'), async (req, res) => {
  try {
    const {
      originalname,
      mimetype,
      size,
      filename
    } = req.file;

    const makeUploadFile = uploadFile({
      uploadFileRepository
    })

    await makeUploadFile({
      name: originalname,
      key: filename,
      size,
      mimeType: mimetype
    })

    return res.status(200).json({url: `${env.server_url}/${filename}`});
  } catch (error) {
    return res.status(500).json({error: error.stack});
  }
})

app.get('/api/v1/files', async (req, res) => {
  const params = {};

  if (req.query?.mimeType) {
    Object.assign(params, {mimeType: req.query?.mimeType})
  }

  const makeLoadUploads = loadUploadFiles({loadUploadFilesRepository});
  const result = await makeLoadUploads(params);
  return res.status(200).json(result);
})

app.get('/api/v1/files/:id', async (req, res) => {
  const {id} = req.params

  const makeLoadUploadById = loadUploadFileById({loadUploadFileByIdRepository});

  const result = await makeLoadUploadById(id);

  if (!result) {
    res.status(404).json({error: "This file not found"});
  }

  return res.status(200).json(result);
})

app.delete('/api/v1/files/:id', async (req, res) => {
  const {id} = req.params

  const makeLoadUploadById = loadUploadFileById({loadUploadFileByIdRepository});

  const result = await makeLoadUploadById(id);

  if (!result) {
    res.status(404).json({error: "This file not found"});
  }

  const makeDeleteUpload = deleteUploadFileById({deleteUploadFileByIdRepository});
  await deleteUploadFileByIdRepository(id);

  return res.status(200).json(result);
})

MongoHelper.connect(env.mongo_uri).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  })
})


process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application-specific logging, rethrowing, or other handling goes here
});


process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Graceful shutdown or other recovery actions
  process.exit(1); // Exit with failure status
});


process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully.');
  // Close database connections, release resources, etc.
  process.exit(0); // Exit with success status
});
