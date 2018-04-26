import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const collection = 'fileUpload';
const fileUploadSchema = new Schema(
  {
    ownerId: {
      type: Number,
      required: true,
      unique: true
    },
    originalFileName: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      required: true
    }
  },
  {
    collection
  }
);

export default mongoose.model(collection, fileUploadSchema);
