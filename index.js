const express = require("express");
const app = express();
// const port = 3000;

app.use('/_site', express.static('_site'));

app.get("/", (req, res) => {
    res.sendFile('_site' + "/index.html");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });
