import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import cors from 'cors';
import routes from './modules/routes';

const app = express();

app.use(cors())
app.use(express.json())


app.use(routes);



app.get('/', (req, res) => {
    res.send({ success: true, message: 'Assingment-3 Server is running' })
})


app.listen(config.port, () => {
    console.log(`Assingment-3 Server is running on port ${config.port}`);
})


async function server() {
    try {

        await mongoose.connect(config.database_url!);
        console.log('Connected to MongoDB using mongoose');


    } catch (error) {
        console.log("Server Error", error);
    }
}

server();