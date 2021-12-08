const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

// Use this route/files for production
app.use(express.static(__dirname + '/dist/'));

// Prepare for SPA
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => console.log('Server started'));
