import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import PostViewPage from './pages/PostViewPage';
import PostListPage from './pages/PostListPage';
import PostCreatePage from './pages/PostCreatePage';

import NavBar from './components/NavBar';
import './assets/css/App.css';

function App() {
  // მაგალითის პოსტების მასივი
  const defaultPosts = [
    {
      id: 1,
      title: 'rato javascripti',
      content:
        'ki',
    },
    {
      id: 2,
      title: 'gamimaqset',
      content:
        'KIU NUMBER 1',
    },
    {
      id: 3,
      title: 'gexvewebit',
      content:
        'blalaslds',
    },
  ];
  let [posts, setPosts] = useState(defaultPosts);

  const navigate = useNavigate();

  // ახალი პოსტის დამატება
  const handlePostCreate = (newPost) => {
    // მაქსიმალური ID-ის გამოთვლა
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

    // გადამისამართება მთავარი გვერდზე პოსტის შექმნის შემდეგ
    navigate('/');
  };

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
