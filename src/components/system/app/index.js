import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

let app = express();
app.use('/public', express.static(__dirname + '/../../../../public'));
app.use(express.static(__dirname + '/../../../../attendance-web'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

module.exports = app;
