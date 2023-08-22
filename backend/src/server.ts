import { mongoConnect } from './database';
import app from './app';
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });

export const MONGO_URL = process.env.MONGODB_URL;
export const PRIVATE_KEY = process.env.JWT_SECRET;
export const COOKIESECRET = process.env.COOKIESECRET;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    mongoConnect();
    console.log(`Servidor iniciado en puerto ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
