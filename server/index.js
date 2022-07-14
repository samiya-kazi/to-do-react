const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const db = require('./db');

app.use(cors());
app.use(express.json());
app.use(router);

(async function bootstrap () {
  await db.client.connect();
  console.log('Connected to MongoDB.');
  app.listen(3030, () => {
    console.log('Server is running on port 3030.');
  })
})();