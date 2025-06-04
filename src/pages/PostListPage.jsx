import { Link, useNavigate } from "react-router-dom";

const PostListPage = ({ posts }) => {
    const navigate = useNavigate();
    
    return (
        <div className="home">
            <h1>Welcome to My Blog</h1>
            <p>Discover amazing articles and share your thoughts!</p>
            <div className="posts-list">
                <div className="posts-grid">
                    {posts.map(post => (
                        <div className="post-card" key={post.id}>
                            <h3>
                                <Link to={`/posts/${post.id}`}>
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="post-preview">
                                {/* Cut preview to 100 characters */}
                                {post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content}
                            </p>
                            <div className="post-actions">
                                <button className="read-more-btn" onClick={() => navigate(`/posts/${post.id}`)}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostListPage;