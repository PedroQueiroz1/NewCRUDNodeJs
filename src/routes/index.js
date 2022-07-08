const express = require('express');
const router = express.Router();
const {allFriends, friendForm, saveFriend, editFriend, updateFriend, viewFriend, deleteFriend} = require('../controllers/FriendsController');
const { body } = require('express-validator');

router.get('/', allFriends);
router.get('/create', friendForm);
//---Arrumar---
router.post('/create',body('name').notEmpty(),saveFriend);
//
router.get('/edit/:id', editFriend);
router.post('/update/:id', updateFriend);
router.get('/friend/:id', viewFriend);
router.get('/delete/:id', deleteFriend);




module.exports = router;