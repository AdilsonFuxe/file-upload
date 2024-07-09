import {DeleteUploadFileByIdRepository} from "../../ports/out";
import {DeleteUploadFileById} from "../../ports/in";

type Dependencies = {
  deleteUploadFileByIdRepository: DeleteUploadFileByIdRepository
}

type BuildDeleteUploadFileById = (dependencies:Dependencies) => DeleteUploadFileById;
export const deleteUploadFileById: BuildDeleteUploadFileById = ({deleteUploadFileByIdRepository}) => async (id: string) => {
  await deleteUploadFileByIdRepository(id)
}