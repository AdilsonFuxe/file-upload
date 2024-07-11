import {LoadUploadFilesRepository} from "../../ports/out";
import {LoadUploadFiles} from "../../ports/in";

type Dependencies = {
  loadUploadFilesRepository: LoadUploadFilesRepository
}
type BuildLoadUploadFilesRepository = (dependencies: Dependencies) => LoadUploadFiles;
export const loadUploadFiles: BuildLoadUploadFilesRepository = ({loadUploadFilesRepository}) =>
  async (params) => await loadUploadFilesRepository(params);