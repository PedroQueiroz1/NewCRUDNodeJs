const express = require('express');
const router = express.Router();
const {allFriends, friendForm, saveFriend, editFriend, updateFriend, viewFriend, deleteFriend} = require('../controllers/FriendsController');
const { body } = require('express-validator');

router.get('/', allFriends);
router.get('/create', friendForm);
//---Arrumar---
router.post('/create',
body('name','Enter a name').notEmpty(),
body('name','Name must have a minimum length of 3 and a max of 20').isLength(3,20),
body('email','Enter an email').notEmpty(),
body('phone','Enter a phone').notEmpty(),
saveFriend);
//
router.get('/edit/:id', editFriend);
router.post('/update/:id', updateFriend);
router.get('/friend/:id', viewFriend);
router.get('/delete/:id', deleteFriend);




module.exports = router;