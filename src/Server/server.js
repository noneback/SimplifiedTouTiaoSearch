import express from "express";
import compression from "compression";
import router from "./routes/router";
import cors from 'cors'
import morgan from 'morgan'

const app = express();
app.use(morgan('method   : :method\n url     : :url \nstatus   : :status \nresponse : :res[content-length] - :response-time ms\n'))
app.use(compression());
app.use(express.static("public"));
app.use(cors())

app.use("/", router);

const port = process.env.PORT || 3002;
app.listen(port, function listenHandler() {
    console.info(`Running on ${port}...`);
});