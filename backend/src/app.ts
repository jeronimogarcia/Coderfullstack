import express from 'express';
import cors from 'cors';
import product from '../routes/Product';
import user from '../routes/User';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(product);
app.use(user);

export default app;
