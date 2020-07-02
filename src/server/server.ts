import * as path from 'path';
import * as express from 'express';
// Import the entire Routes folder and searches for the index.js file
import apiRouter from './routes';

let app = express();

// Middleware
app.use(express.json()); // Same as body-parser

// Middleware for Client
let clientPath = path.join(__dirname, '../client');
app.use(express.static(clientPath));

// Middleware Routers
app.use('/api', apiRouter);

// Listen on localhost:3000/
app.listen(3000);
