import fileUpload from '../models/fileUpload';

export default {
  insert: async (data) => {
    try {
      const file = new fileUpload({
        ownerId: data.ownerId,
        originalFileName: data.originalname,
        path: data.path,
        fileName: data.filename
      });
      file.save(err => {
        if (err) {
          console.log('Insert Error');
        } else {
          console.log('Insert Successful');
          return true;
        }
      })
    } catch (err) {
      return err;
    }
  }
};
