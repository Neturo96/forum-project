const express = require('express');
const router = express.Router();
const { createReply, getRepliesByPost } = require('../controllers/replyController');
const auth = require('../middleware/auth');

router.post('/:postId', auth, createReply);
router.get('/:postId', getRepliesByPost);

module.exports = router;