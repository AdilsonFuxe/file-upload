import {UploadFileRepository} from "../../ports/out";
import {UploadFile} from "../../ports/in";


type Dependencies = {
  uploadFileRepository: UploadFileRepository
}

type BuildUploadFile = (dependencies: Dependencies) => UploadFile

export const uploadFile: BuildUploadFile = ({uploadFileRepository}) =>
  async (params) =>
    await uploadFileRepository(params)