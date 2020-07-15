import express from "express";
import compression from "compression";
import router from "./routes/router";
import cors from 'cors'
import axios from 'axios';
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    // console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const app = express();
app.use(requestLogger)
app.use(compression());
app.use(express.static("public"));
app.use(cors())

app.use("/", router);




const port = process.env.PORT || 3002;
app.listen(port, function listenHandler() {
    console.info(`Running on ${port}...`);
});