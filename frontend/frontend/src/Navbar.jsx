// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#8A2BE2', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '1rem', color: 'white' }}>Login</Link>
      <Link to="/register" style={{ marginRight: '1rem', color: 'white' }}>Register</Link>
      <Link to="/create" style={{ color: 'white' }}>Create Post</Link>
    </nav>
  );
}