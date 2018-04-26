import services from '../services';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import database from '../models/database';

export default [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  methodOverride('_method'),
  services
];
