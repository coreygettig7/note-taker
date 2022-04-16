const express = require('express');
// grab from routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// set port
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(exoress.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});
