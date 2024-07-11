import {Express, Router} from "express";
import multerConfig from '../../../../config/multer';
import multer from 'multer';
import {
  deleteUploadFileByIdController,
  loadUploadFileByIdController,
  loadUploadFilesController,
  uploadFileController
} from "../../controllers";
import {
  makeDeleteUploadFileById,
  makeLoadUploadFIleById,
  makeLoadUploads,
  makeUploadFile
} from "../../../factories/usecaces";

export default (app: Express) => {
  const router = Router();
  router.post('/uploads', multer(multerConfig).single('file'), uploadFileController({uploadFile: makeUploadFile()}))
  router.get('/uploads', loadUploadFilesController({loadUploadFiles: makeLoadUploads()}))
  router.get('/uploads/:id', loadUploadFileByIdController({loadUploadFileById: makeLoadUploadFIleById()}))
  router.delete('/uploads/:id', deleteUploadFileByIdController({
    deleteUploadFileById: makeDeleteUploadFileById(),
    loadUploadFileById: makeLoadUploadFIleById()
  }))
  app.use('/api/v1', router);
}