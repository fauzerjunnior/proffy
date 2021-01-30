import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(port);

console.log(`O servidor está disponível na porta ${port}`);

