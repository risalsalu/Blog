import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Page3({ posts, setPosts }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts[id]

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
    }
  }, [post]);

  function handleUpdate(a){
  a.preventDefault();
    const updated = [...posts];
    updated[id] = { title, body };
    setPosts(updated);
    navigate('/');
  };

  if (!post) return <p> not found</p>;

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Post</h2>
      <input type="text" value={title} onChange={(a) => setTitle(a.target.value)} required/><br />
      <textarea value={body} onChange={(a) => setBody(a.target.value)} required></textarea><br />
      <button type="submit">Update</button>
    </form>
  );
}

export default Page3
