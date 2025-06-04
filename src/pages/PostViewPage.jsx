import React from 'react';

import { Link, useParams } from 'react-router-dom';

const PostViewPage = ({ posts }) => {
  const { postId } = useParams();
  
  // Find the post by ID
  const post = posts.find(p => p.id === parseInt(postId, 10));

  if (!post)
    return <div>Post not found</div>;


  return (
    <div className="post-detail">
      <div className='post-header'>
        <Link to="/" className="back-link">
        ← Back to Home
        </Link>
        <h1>{post.title}</h1>
      </div>
      <div className='post-content'>
        <p>{post.content}</p>
      </div>
      <div className='post-navigation'>
        <div className='nested-content'></div>
      </div>
    </div>
  );
}
export default PostViewPage;