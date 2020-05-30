const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008;

// Expose static public folder
app.use(express.static(__dirname + '/public'));

// Set up EJS views
app.set('view engine', 'ejs');
app.set('ejs', 'ejs');


// Set up routes 
app.use('/', require('./routes/index'))


app.listen(PORT, () => {
    console.log('Personal Site up & Runnin on: ' + PORT)
})