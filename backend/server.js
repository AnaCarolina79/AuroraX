import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/database.js';
const app = express();

app.use(express.json());

app.get('/', async (req, res)  => {
 const db = await connectDB();
res.send('oi to funcionando')
});

app.listen(3000, () => console.log("to aqui funcionano"));