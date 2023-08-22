import express from 'express';
import cors from 'cors';
import product from '../routes/Product';
import user from '../routes/User';
import cookieParser from 'cookie-parser';
import { COOKIESECRET } from '../src/server';

const corsOptions = {
  //To allow requests from client. Cookie set in browser
  origin: ['http://localhost:5173', 'http://127.0.0.1', 'http://104.142.122.231'],
  credentials: true,
  exposedHeaders: ['set-cookie'],
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser(COOKIESECRET));
app.use(express.urlencoded({ extended: false }));
app.use(product);
app.use(user);

export default app;
