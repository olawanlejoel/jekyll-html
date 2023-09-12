const express = require("express");
const app = express();
// const port = 3000;

var path = require('path');
var filename = path.basename(__filename);
console.log(filename);

app.use(express.static(__dirname + '/_site'));

app.get("/", (req, res) => {
    res.sendFile('../_site/index.html', { root: __dirname });
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });
