import {Upload} from "../../core/models";
import {UploadFile} from "../in";

export type UploadFileRepository = (params: UploadFileRepository.Params) => Promise<UploadFileRepository.Response>

export namespace UploadFileRepository {
  export type Params = Omit<Upload, 'id' | 'createdAt' | 'updatedAt'>
  export type Response = Upload
}

export type LoadUploadFileByIdRepository = (id: string) => Promise<LoadUploadFileByIdRepository.Response>

export namespace LoadUploadFileByIdRepository {
  export type Response = Upload
}

export type DeleteUploadFileByIdRepository = (id: string) => Promise<void>

export type LoadUploadFilesRepository = (params: LoadUploadFilesRepository.params) => Promise<LoadUploadFilesRepository.Response>;

export namespace LoadUploadFilesRepository {
  export type params = {
    mimeType?: string;
  }

  export type Response = ReadonlyArray<UploadFile>
}