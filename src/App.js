import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import PostViewPage from './pages/PostViewPage';
import PostListPage from './pages/PostListPage';
import PostCreatePage from './pages/PostCreatePage';


// Components
import NavBar from './components/NavBar';
import './assets/css/App.css';

function App() {
  // Struct: {id: number, title: string, content: string}
  let [posts, setPosts] = useState([]);
  const navigate = useNavigate();


  const handlePostCreate = (newPost) => {
    // Extract highest id
    const highestId = posts.reduce((max, post) => Math.max(max, post.id), 0);

    console.log('Creating new post:', newPost);

    setPosts([
      ...posts,
      {
        id: highestId + 1,
        title: newPost.title,
        content: newPost.content,
      },
    ]);

    navigate('/');
  }

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PostListPage posts={posts} />} />
          <Route path="/posts/:postId" element={<PostViewPage posts={posts} />} />
          <Route path="/new-post" element={<PostCreatePage onSubmit={handlePostCreate} />} />
        </Routes>
      </main>
    </>

  );
}

export default App;
