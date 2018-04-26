import express from 'express';
import multer from 'multer';
import crypto from 'crypto';
import config from '../config';
import { existsSync, mkdirSync } from 'fs';
import dbQuery from '../library/query';

const router = express.Router();
const folderPath = './public/uploads';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!existsSync(folderPath))
      mkdirSync(folderPath);
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, buf) => {
      const fileType = file.originalname.split('.')[1];
      const fileName = buf.toString('hex') + '-' + Date.now() + '.' + fileType;
      cb(null, fileName);
    });
  }
});

const upload = multer({ storage });

router.post('/upload/:id', upload.single(config.fileInputName), async (req, res) => {
  req.file['ownerId'] = req.params.id;
  const result = await dbQuery.insert(req.file);
  res.send(result);
});

export default router;