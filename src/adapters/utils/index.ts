import {DeleteLocalFile} from "../../ports/out";
import path from 'path';
import fs from 'fs';

export const deleteLocalFileAdapter: DeleteLocalFile = async (key: string) => {
  const pathLocation = path.join(__dirname, '..', '..', '..', 'storage', 'uploads', key);
  if (fs.existsSync(pathLocation)) {
    fs.unlinkSync(pathLocation);
  }
}