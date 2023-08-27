import express from 'express';
import cors from 'cors';
import product from '../routes/Product';
import user from '../routes/User';
import cookieParser from 'cookie-parser';
import { COOKIESECRET } from '../src/server';
import passport from 'passport';
import { initPassport } from '../auth/passport.config';

const corsOptions = {
  //To allow requests from client. Cookie set in browser
  origin: ['http://localhost:5173'],
  credentials: true,
  exposedHeaders: ['set-cookie'],
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser(COOKIESECRET));
app.use(express.urlencoded({ extended: false }));
initPassport();
app.use(passport.initialize());

app.use(product);
app.use(user);

export default app;
