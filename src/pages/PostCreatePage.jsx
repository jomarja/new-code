import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCreatePage = ({ onSubmit }) => {
    const navigate = useNavigate();
    
    return (
        <div className="new-post">
            <h1>Create New Post</h1>
            <form className='post-form' onSubmit={(e) => {
                e.preventDefault();
                onSubmit({
                    title: e.target.title.value,
                    content: e.target.content.value,
                });
            }}>
                <div className='form-group'>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required placeholder='Enter post title...' />
                </div>
                <div className='form-group'>
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content" required rows={10} placeholder='Write your post content...'></textarea>
                </div>
                <div className='form-actions'>
                    <button className='submit-btn' type="submit">Create Post</button>
                    <button className='cancel-btn' type="button" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>

    );
    }

export default PostCreatePage;