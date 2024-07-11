import {deleteUploadFileById, loadUploadFileById, loadUploadFiles, uploadFile} from "../../../core/usecases";
import {
  deleteUploadFileByIdRepository,
  loadUploadFileByIdRepository,
  loadUploadFilesRepository,
  uploadFileRepository
} from "../../db/mongoose/repositories";
import {LoadUploadFileById, LoadUploadFiles, UploadFile} from "../../../ports/in";

export const makeUploadFile = (): UploadFile => uploadFile({
  uploadFileRepository
})

export const makeLoadUploads = (): LoadUploadFiles => loadUploadFiles({loadUploadFilesRepository});

export const makeLoadUploadFIleById = (): LoadUploadFileById => loadUploadFileById({loadUploadFileByIdRepository});

export const makeDeleteUploadFileById = () => deleteUploadFileById({deleteUploadFileByIdRepository});
