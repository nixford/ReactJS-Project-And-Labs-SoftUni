import express from 'express'; // This is new sintaxis, which is enabled in package.json -> "type": "module", The old sintaxis: const express = require('express'); 
import bodyParser from 'body-parser'; // Body-parser is the Node.js body parsing middleware. // It is responsible for parsing the incoming request bodies in a middleware before you handle it. // Body-parser parses your request and converts it into a format from which you can easily extract relevant information that you may need.
import mongoose from 'mongoose';
import cors from 'cors';

