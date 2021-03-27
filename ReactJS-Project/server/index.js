import express from 'express'; // This is new sintaxis, which is enabled in package.json -> "type": "module", The old sintaxis: const express = require('express'); 
import bodyParser from 'body-parser'; // Body-parser is the Node.js body parsing middleware. // It is responsible for parsing the incoming request bodies in a middleware before you handle it. // Body-parser parses your request and converts it into a format from which you can easily extract relevant information that you may need.
import mongoose from 'mongoose';
import cors from 'cors'; // Enables cross-origin requests

import eventsRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))	
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))	
app.use(cors());

app.use('/events', eventsRoutes);

const CONNECTION_URL = 'mongodb+srv://userDBReact:userDBReact123@cluster0.riesh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
