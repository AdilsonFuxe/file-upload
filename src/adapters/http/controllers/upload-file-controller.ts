import env from "../../../config/env";
import {UploadFile} from "../../../ports/in";


type Params = {
  uploadFile: UploadFile
}

export const uploadFileController = (params: Params) => async (req, res) => {
  try {
    const {uploadFile} = params;
    const {
      originalname,
      mimetype,
      size,
      filename
    } = req.file;


    const result = await uploadFile({
      name: originalname,
      key: filename,
      size,
      mimeType: mimetype
    })

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({error: error.stack});
  }
}