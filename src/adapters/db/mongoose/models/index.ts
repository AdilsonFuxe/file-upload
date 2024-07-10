import {Document, model, Model, Schema} from 'mongoose'
import {Upload} from "../../../../core/models";

type UploadFileDocument = Upload &
  Document & {
  id: Document['_id'];
};

type UploadFileMongooseModel = Model<UploadFileDocument> & {
  id: Document['_id'];
};

const UploadFileSchema = new Schema<UploadFileDocument>({
  name: {
    type: String
  },
  size: {
    type: Number
  },
  key: {
    type: String
  },
  mimeType: {
    type: String
  }
}, {timestamps: true})

export const UploadFileModel = model<UploadFileDocument, UploadFileMongooseModel>(
  'uploads',
  UploadFileSchema
)