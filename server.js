dotenv.config();

import connectDB from './mongodb/connect.js';
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.json({msg:"Hello"})

});

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);

        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log('Server running on port ',port);
            
        })

    } catch (error) {
        console.log(error);
    }


}

startServer();

