const express = require('express');
const router = express.Router();
const {allFriends, friendForm, saveFriend, editFriend, updateFriend, viewFriend, deleteFriend} = require('../controllers/FriendsController');

router.get('/', allFriends);
router.get('/create', friendForm);
router.post('/create', saveFriend);
router.get('/edit/:id', editFriend);
router.post('/update/:id', updateFriend);
router.get('/friend/:id', viewFriend);
router.get('/delete/:id', deleteFriend);

module.exports = router;