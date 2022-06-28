const path = require('path')
const express = require('express');
const dotenv = require('dotenv')

dotenv.config()


const app = express();
const port = process.env.PORT

app.use(express.static(path.join(__dirname,'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'), (err) => {
  if (err) res.status(500).send(err);
     });
  })
app.set('port',process.env.PORT || 8080);
app.listen(port, function() {
    console.log('listening on port ', port);
  });

