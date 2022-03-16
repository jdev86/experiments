/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { pokemon } from './pokemon';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-api Justin!' });
});

app.get('/pokemon', (_, res) => {
  res.send(pokemon);
});

app.get('/search', (req, res) => {
  const q = ((req.query.q as string) ?? '').toLowerCase();
  res.send(pokemon.filter(({ name: { english }}) =>
    english.toLowerCase().includes(q ?? '')
  ));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
