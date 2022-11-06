import express from 'express';
import { v4 as uuidv4 } from 'uuid'; //creates unique ids package

const router = express.Router();

let users = [];  //let declaration here

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


//req.parms {id: }
router.get('/:id', (req, res) => {
    const { id } = req.params; //destruct
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

//delete users
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id); //filter removes elements to false values
    res.send(`User with the id ${id} deleted from the database.`);
});

//update without overwrite (put overwrites)
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToBeUpdated = users.find((user) => user.id === id);

    if (firstName) {
        userToBeUpdated.firstName = firstName;
    };

    if (lastName) {
        userToBeUpdated.lastName = lastName;
    };

    if (age) {
        userToBeUpdated.age = age;
    };

    res.send(`User with the id ${id} has been updated.`)

})

export default router;