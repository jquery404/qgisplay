const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/mapbox', (req, res) => {
    res.sendFile(path.join(__dirname+'/mapbox.html'));
})
  

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app;