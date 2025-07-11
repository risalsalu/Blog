import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3'; 

function App() {
  const [posts, setPosts] = useState([]);

  return (
<div>
<Routes>
  <Route path="/" element={<Page1 posts={posts} />} />
  <Route path="/create" element={<Page2 posts={posts} setPosts={setPosts} />} />
  <Route path="/edit/:id" element={<Page3 posts={posts} setPosts={setPosts} />} />
</Routes>
</div>
  )
}

export default App;
