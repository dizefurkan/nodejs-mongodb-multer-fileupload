import services from '../services';
import bodyParser from 'body-parser';
import database from '../models/database';

export default [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  services
];
