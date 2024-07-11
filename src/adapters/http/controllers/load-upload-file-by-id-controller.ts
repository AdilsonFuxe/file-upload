import {LoadUploadFileById} from "../../../ports/in";

type Params = {
  loadUploadFileById: LoadUploadFileById
}

export const loadUploadFileByIdController = (params: Params) => async (req, res) => {
  try {
    const {loadUploadFileById} = params;
    const {id} = req.params
    const result = await loadUploadFileById(id);
    if (!result) {
      res.status(404).json({error: "This file not found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({error: error.stack});
  }
}