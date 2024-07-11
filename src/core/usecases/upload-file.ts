import {UploadFileRepository} from "../../ports/out";
import {UploadFile} from "../../ports/in";
import {generateUri} from "../helpers";


type Dependencies = {
  uploadFileRepository: UploadFileRepository
}

type BuildUploadFile = (dependencies: Dependencies) => UploadFile

export const uploadFile: BuildUploadFile = ({uploadFileRepository}) =>
  async (params) => {
    const result = await uploadFileRepository(params);
    return {url: generateUri(result.key)};
  }