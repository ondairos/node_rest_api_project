import { v4 as uuidv4 } from 'uuid'; //creates unique ids package

let users = [];  //let declaration here

export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId }; //spread creation of objects

    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the database.`);
}


export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params; //deconstruct
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id); //filter removes elements to false values
    res.send(`User with the id ${id} deleted from the database.`);
}


export const updateUser = (req, res) => {
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

}
