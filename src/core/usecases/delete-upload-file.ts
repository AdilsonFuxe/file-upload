import {DeleteUploadFileByIdRepository, DeleteLocalFile, LoadUploadFileByIdRepository} from "../../ports/out";
import {DeleteUploadFileById} from "../../ports/in";

type Dependencies = {
  deleteUploadFileByIdRepository: DeleteUploadFileByIdRepository
  loadUploadFileByIdRepository: LoadUploadFileByIdRepository,
  deleteLocalFile: DeleteLocalFile;
}

type BuildDeleteUploadFileById = (dependencies: Dependencies) => DeleteUploadFileById;
export const deleteUploadFileById: BuildDeleteUploadFileById = ({
                                                                  deleteUploadFileByIdRepository,
                                                                  loadUploadFileByIdRepository,
                                                                  deleteLocalFile
                                                                }) => async (id: string) => {

  const upload = await loadUploadFileByIdRepository(id);

  if (upload) {
    await deleteUploadFileByIdRepository(id)
    await deleteLocalFile(upload.key);
  }

}