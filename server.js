const path = require('path')
const express = require('express');
const dotenv = require('dotenv')

dotenv.config()


const app = express();
const port = process.env.PORT

app.use(express.static(path.join(__dirname,'dist')));
app.set('port',process.env.PORT || 8080);
app.listen(port, function() {
    console.log('listening on port ', port);
  });

