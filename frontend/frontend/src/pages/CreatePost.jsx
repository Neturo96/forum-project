import { useState } from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();

    // TEMP: just logging to console
    console.log('New post:', { title, content });

    // Later: send this to backend
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create a New Post</h2>
      <form onSubmit={handlePostSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <textarea
            placeholder="Write your post here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={8}
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.7rem 2rem', background: '#8A2BE2', color: 'white', border: 'none' }}>
          Publish Post
        </button>
      </form>
    </div>
  );
}