const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

const URL_FROM_YOUR_WEBSITE = '';
const URL_FOR_YOUR_API = '';
const PORT = 3000;

app.use(cors({
  origin: URL_FROM_YOUR_WEBSITE,
  credentials: true
}));

app.use('/api', (req, res) => {
  const url = URL_FOR_YOUR_API;
  req.pipe(request({ url: url })).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

