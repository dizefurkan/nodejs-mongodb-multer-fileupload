import services from '../services';
import bodyParser from 'body-parser';

export default [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  services
];
