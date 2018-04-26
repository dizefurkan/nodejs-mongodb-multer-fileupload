import mongoose from 'mongoose';
import config from '../config';
const url = config.mongooseUrl;
mongoose.connect(url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', () => {
  console.log('Mongoose Connected');
});