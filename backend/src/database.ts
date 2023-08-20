import mongoose from 'mongoose' 
import { MONGO_URL } from './server'

export const mongoConnect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URL as string);
    console.log('Conectado al servidor:', db.connection.name)
  } catch (error) {
    console.log(`Error al conectar al servidor:`, error)
  }
}