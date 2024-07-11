import {LoadUploadFiles} from "../../../ports/in";

type Params = {
  loadUploadFiles: LoadUploadFiles
}

export const loadUploadFilesController = (params: Params) => async (req, res) => {
  try {
    const {loadUploadFiles} = params;
    const query = {};
    if (req.query?.mimeType) {
      Object.assign(query, {mimeType: req.query?.mimeType})
    }
    const result = await loadUploadFiles(query);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({error: error.stack});
  }
}