import express from 'express'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();
const PORT = process.env.PORT|| 8000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/posts', postRoutes);

app.listen(PORT, () => console.log('Listening on Port 8000'));
