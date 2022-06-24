
const { Router } = require('express');
const { usersGet, 
        userPost, 
        userPut, 
        userDelete, 
        userPatch 
    } = require('../controllers/users.controllers');

//Route || endpoint
const router = Router();

router.get('/', usersGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/:id', userDelete);

router.patch('/', userPatch);


module.exports = router;