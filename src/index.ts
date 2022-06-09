import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(process.env.PORT || 5000,() => {console.log('server is connected in port 5000')});