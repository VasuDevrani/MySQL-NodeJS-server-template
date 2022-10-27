import express from "express";
import cors from 'cors';
import tutRoutes from './routes/tutorial.routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', tutRoutes);

app.listen(8000, () => {
    console.log('server is listening at the port 8000');
})