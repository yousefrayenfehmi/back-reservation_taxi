import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './connectiondb/connectiondb';
import voyageRoutes from './routes/voyageRoutes';



const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/voyages', voyageRoutes);

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err);
  }
  console.log('Connected to the PostgreSQL database');
  release();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node.js + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
