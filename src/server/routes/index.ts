import * as express from 'express';
// Import all the routes (get, post, put, delete) from chirps.js
import chirpsRouter from './chirps';

let router = express.Router();

router.use('/chirps', chirpsRouter);

export default router;
