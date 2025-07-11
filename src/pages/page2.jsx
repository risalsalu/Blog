import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page2({ posts, setPosts }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  function handleSubmit(a){
  a.preventDefault();
    setPosts([...posts, { title, body }]);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <input type="text" value={title} onChange={(a) => setTitle(a.target.value)} required/><br />
      <textarea value={body} onChange={(a) => setBody(a.target.value)}required></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Page2
