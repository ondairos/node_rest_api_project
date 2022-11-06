import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


//all routes here start with /users
router.get('/', getUsers);

router.post('/', createUser);

//req.parms {id: }
router.get('/:id', getUser);

//delete users
router.delete('/:id', deleteUser);

//update without overwrite (put overwrites)
router.patch('/:id', updateUser);

export default router;