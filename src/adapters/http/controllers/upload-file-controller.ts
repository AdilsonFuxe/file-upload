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


    await uploadFile({
      name: originalname,
      key: filename,
      size,
      mimeType: mimetype
    })

    return res.status(200).json({url: `${env.server_url}/${filename}`});
  } catch (error) {
    return res.status(500).json({error: error.stack});
  }
}