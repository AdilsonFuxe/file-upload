import {LoadUploadFileByIdRepository} from "../../ports/out";
import {LoadUploadFileById} from "../../ports/in";
import {generateUri} from "../helpers";

type Dependencies = {
  loadUploadFileByIdRepository: LoadUploadFileByIdRepository
}
type BuildLoadUploadFileById = (dependencies: Dependencies) => LoadUploadFileById;
export const loadUploadFileById: BuildLoadUploadFileById = ({loadUploadFileByIdRepository}) =>
  async (id) => {
    const result = await loadUploadFileByIdRepository(id);
    if (result) {
      return {
        ...result,
        url: generateUri(result.key)
      }
    }
    return null;
  }