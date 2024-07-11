import {Upload} from "../../core/models";

export type UploadFile = (params: UploadFile.Params) => Promise<UploadFile.Response>

export namespace UploadFile {
  export type Params = Omit<Upload, 'id' | 'createdAt' | 'updatedAt'>
  export type Response = { url: string }
}

export type LoadUploadFileById = (id: string) => Promise<LoadUploadFileById.Response>

export namespace LoadUploadFileById {
  export type Response = Upload & { url: string }
}

export type DeleteUploadFileById = (id: string) => Promise<void>

export type LoadUploadFiles = (params: LoadUploadFiles.params) => Promise<LoadUploadFiles.Response>;

export namespace LoadUploadFiles {
  export type params = {
    mimeType?: string;
  }

  export type Response = ReadonlyArray<Upload>
}