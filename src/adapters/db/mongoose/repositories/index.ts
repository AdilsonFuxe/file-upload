import {
  UploadFileRepository,
  DeleteUploadFileByIdRepository,
  LoadUploadFilesRepository,
  LoadUploadFileByIdRepository
} from '../../../../ports/out';
import {UploadFileModel} from "../models";
import {MongoHelper} from "../helpers";

export const uploadFileRepository: UploadFileRepository = async (params) => {
  const upload = new UploadFileModel(params);
  await upload.save();
  const parsedDoc = JSON.parse(JSON.stringify(upload));
  return MongoHelper.serialize(parsedDoc);
}

export const deleteUploadFileByIdRepository: DeleteUploadFileByIdRepository = async (id: string) => {
  await UploadFileModel.findByIdAndDelete(id);
}

export const loadUploadFileByIdRepository: LoadUploadFileByIdRepository = async (id: string) => {
  const result = await UploadFileModel.findById(id).lean();
  return MongoHelper.serialize(result);
}

export const loadUploadFilesRepository: LoadUploadFilesRepository = async (params) => {
  const result = await UploadFileModel.find(params).lean();
  return result.map(MongoHelper.serialize);
}