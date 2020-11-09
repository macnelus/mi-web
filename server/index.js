import express from 'express'; // importamos express
import dotenv from 'dotenv'; // variables de desarrollo
import logger from './lib/logger.js';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

//middlewares
import loggerMiddleware from './middlewares/logger-middleware.js';
import jsonResponse from './middlewares/json-response-middleware.js';

//routers
import healthRouter from './routes/health.js';

const server = express();

const PORT = process.env.PORT || 3000;

server.use(loggerMiddleware);
server.use(jsonResponse);
server.use(bodyParser.json());
server.use(cors());

//routes
server.use(healthRouter);

server.listen(PORT, () => logger.info(`Server starting on port ${PORT} 🚀 📡`)); //comprobamos que el server está corriendo.
