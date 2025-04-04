const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const author = req.user.id;

    const post = new Post({ title, content, author, category });
    await post.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'username email')
      .sort({ createdAt: -1 }); // newest first
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username email');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.createPost = async (req, res) => {
  const { title, content, category } = req.body; // <-- added category
  try {
    const post = new Post({
      title,
      content,
      category,
      author: req.user._id,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllPosts = async (req, res) => {
  const { category } = req.query; // ?category=Tech
  const filter = category ? { category } : {};
  try {
    const posts = await Post.find(filter)
      .populate('author', 'username')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};