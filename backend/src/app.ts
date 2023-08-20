import express from 'express';
import cors from 'cors';
import product from '../routes/Product';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(product);

export default app;
