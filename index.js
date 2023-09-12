const express = require("express");
const app = express();

app.use(express.static(__dirname + './_site'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './_site', 'index.html'));
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });
