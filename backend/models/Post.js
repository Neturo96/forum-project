const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: String,
    enum: ['General', 'News', 'Tech', 'Help', 'Random'],
    default: 'General',
  },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, required: true }, // <-- added
  },
  { timestamps: true }
);