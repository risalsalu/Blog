import { Link } from 'react-router-dom';

function Page1({ posts }) {
  return (
    <div>
     <h2>Blog Posts</h2>
     <Link to="/create"> Create Post</Link>
   <br />
  {posts.length === 0 ? <p>No posts</p> :
    posts.map((post, index) => (
       <div key={index} style={{ borderBottom: "1px solid ", margin: "10px" }}>
      <h3>{post.title}</h3>
       <p>{post.body.slice(0, 50)}</p>
      <Link to={`/edit/${index}`}>Edit</Link>
   </div> ))}
    </div>
  )
}

export default Page1
