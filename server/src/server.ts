import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(3333);