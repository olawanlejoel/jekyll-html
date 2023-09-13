const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './_site')));

// app.listen(8080, () => {
// 	console.log('Jekyll Static Site listening on port 8080!');
// });
