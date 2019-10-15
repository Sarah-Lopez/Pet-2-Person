//Code
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMiddleware){
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}