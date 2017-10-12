const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
import 'colors'
const serverRender = require('./serverRender');

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(serverRender);

const PORT = process.env.PORT || 8848,
  HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.info(`Server listening on ${HOST} port ${PORT}`.bold.green)
});


