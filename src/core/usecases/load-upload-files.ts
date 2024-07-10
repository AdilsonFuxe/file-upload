import {LoadUploadFilesRepository} from "../../ports/out";

type Dependencies = {
  loadUploadFilesRepository: LoadUploadFilesRepository
}
type BuildLoadUploadFilesRepository = (dependencies: Dependencies) => LoadUploadFilesRepository;
export const loadUploadFiles: BuildLoadUploadFilesRepository = ({loadUploadFilesRepository}) =>
  async (params) => await loadUploadFilesRepository(params);