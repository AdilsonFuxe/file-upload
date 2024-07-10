import {LoadUploadFileByIdRepository} from "../../ports/out";
import {LoadUploadFileById} from "../../ports/in";

type Dependencies = {
  loadUploadFileByIdRepository: LoadUploadFileByIdRepository
}
type BuildLoadUploadFileById = (dependencies: Dependencies) => LoadUploadFileById;
export const loadUploadFileById: BuildLoadUploadFileById = ({loadUploadFileByIdRepository}) =>
  async (id) =>
    await loadUploadFileByIdRepository(id);