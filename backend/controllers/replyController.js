const Reply = require('../models/Reply');

// Create a reply
exports.createReply = async (req, res) => {
  const { content } = req.body;
  const { postId } = req.params;

  try {
    const reply = new Reply({
      content,
      post: postId,
      author: req.user._id,
    });

    await reply.save();
    res.status(201).json(reply);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all replies for a post
exports.getRepliesByPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const replies = await Reply.find({ post: postId })
      .populate('author', 'username')
      .sort({ createdAt: 1 });
    res.json(replies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};