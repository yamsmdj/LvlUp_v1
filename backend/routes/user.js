const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', userCtrl.getAllUser)
router.put('/:id',  userCtrl.updateUser)
router.patch('/:id',  userCtrl.patchUser)
router.delete('/:id',  userCtrl.deleteUser)

module.exports = router;