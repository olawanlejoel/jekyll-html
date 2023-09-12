const express = require("express");
const app = express();
// const port = 3000;
const path = require('path');

import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

console.log(path.join(__dirname, 'index.html'));

app.use(express.static(__dirname + '/_site'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './_site/index.html'));
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });
