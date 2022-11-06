import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //using jason data in our app

//all routes here start with /users
app.use('/', usersRoutes);

app.get('/', (req, res) => {
    res.send('hello from homepage.');
});

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
})