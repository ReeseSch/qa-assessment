const express = require('express')
const path = require('path')

const app = express()

const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: 'f83506a893014d2eb782086d77531e5f',
  captureUncaught: true,
  captureUnhandledRejections: true
})




app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../tictacjs.html'));
  rollbar.info('served successfully!!!')
  rollbar.log('Its working! ITS WORKING!!!')
});

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})