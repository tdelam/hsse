const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

require('./models/User')
require('./models/hse/HSEArticle');
require('./models/sse/SSEArticle');
require('./models/Stage');

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true },
    
    err => {
        if (err) throw err;
        console.log(`Successfully connected to database.`);
    }
);
mongoose.set('useCreateIndex', true);

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

require('./routes/authRoutes')(app);
require('./routes/hse/HSEArticleRoutes')(app);
require('./routes/sse/SSEArticleRoutes')(app);
require('./routes/stageRoutes')(app);

app.get('/', (req, res) => {
    res.send({ message: 'Welcome McMaster Health Sciences!'});
}); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
