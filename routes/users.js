import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

//all routes here start with /users
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId }; //spread creation of objects

    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the database.`);
});

router.get('/:id', (req, res) =>{
    res.send('THE GET ID ROUTE');
});

export default router;