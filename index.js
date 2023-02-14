const express = require('express'),
app = express();
app.use(express.static('public')); 
var hits = 0; 
app.get('/hits', (req, res) => {
 hits += 1;
 res.contentType('text/plain').send( (hits).toString() );
});
app.listen(3000);