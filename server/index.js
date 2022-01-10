import express from 'express'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'

import bodyParser from 'body-parser'
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT|| 8000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log('Listening on Port 8000'));
