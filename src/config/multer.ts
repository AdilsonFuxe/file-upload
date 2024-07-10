import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import fs from 'fs';


const localPath = path.join(__dirname, '..', '..', 'storage', 'uploads');


const storageType = {
  local: multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync(localPath)) {
        fs.mkdirSync(path.join(__dirname, '..', '..', 'storage'));
        fs.mkdirSync(
          path.join(__dirname, '..', '..', 'storage', 'uploads')
        );
      }
      cb(null, localPath);
    },
    filename: function (req, file, cb) {
      const extension: string = file.originalname.split('.').pop();
      const name = `${crypto.randomBytes(24).toString('hex')}.${extension}`;
      cb(null, name);
    }
  })
};

export default {
  dest: localPath,
  storage: storageType.local,
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (allowedMimes.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Invalid file type.'));
  }
};
