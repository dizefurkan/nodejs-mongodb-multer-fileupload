import path from 'path';
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import multer from 'multer';
import gridfsStorage from 'multer-gridfs-storage';
import grid from 'gridfs-stream';
import crypto from 'crypto';
import fileUpload from '../models/fileUpload';
import config from '../config';
const router = express.Router();

const conn = mongoose.createConnection(config.mongooseUrl);

let gfs;

conn.once('open', () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection('upload');
});

const storage = new gridfsStorage({
  url: config.mongooseUrl,
  file: async (req, file) => {
    try {
      crypto.randomBytes(16, (err, buf) => {
        const fileName = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          fileName,
          bucketName: 'upload'
        };
        return fileInfo;
      })
    } catch (err) {
      return err;
    }
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  res.send(req.file);
});

export default router;