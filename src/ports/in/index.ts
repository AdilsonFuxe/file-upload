import {Upload} from "../../core/models";

export type UploadFile = (params: UploadFile.Params) => Promise<UploadFile.Response>

export namespace UploadFile {
  export type Params = Omit<Upload, 'id' | 'createdAt' | 'updatedAt'>
  export type Response = Upload
}