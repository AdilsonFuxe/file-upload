import {DeleteUploadFileById, LoadUploadFileById} from "../../../ports/in";


type Params = {
  loadUploadFileById: LoadUploadFileById,
  deleteUploadFileById: DeleteUploadFileById
}

export const deleteUploadFileByIdController = (params: Params) => async (req, res) => {
  try {
    const {loadUploadFileById, deleteUploadFileById} = params;
    const {id} = req.params

    const result = await loadUploadFileById(id);

    if (!result) {
      res.status(404).json({error: "This file not found"});
    }

    await deleteUploadFileById(id);

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({error: error.stack});
  }
}