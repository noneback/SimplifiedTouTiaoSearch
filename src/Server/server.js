import express from "express";
import compression from "compression";
import cors from 'cors'
import morgan from 'morgan'
import timeout from 'connect-timeout'

import router from "./routes/router";
import logger from './utils/logger'

const app = express();

/**使用的中间件 */
app.use(morgan('method   : :method\n url     : :url \nstatus   : :status \nresponse : :res[content-length] - :response-time ms\n'))
app.use(compression());
app.use(express.static("public"));
app.use(cors())
app.use(timeout(5000))
app.use("/", router);

const port = process.env.PORT || 3002;
app.listen(port, function listenHandler() {
    logger.info(`Running on ${port}`)
});