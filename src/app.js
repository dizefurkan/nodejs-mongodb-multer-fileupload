import express from 'express';
import core from './core/express';

const app = express();
core.forEach(elem => app.use(elem));

const port = 3030;
app.listen(port, () => console.log(`Server started at ${port}`));