const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname+'/dist/build')));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/build/', 'index.html'));
});

app.listen(port, () => {
	console.log(`now listening on port ${port}`);
});