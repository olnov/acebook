import React, { useEffect, useState } from 'react';
import TopBarGroup from '../../components/TopBarGroup';
import PostCardWithLike from '../../components/PostCardWithLike/PostCardWithLike';
import Pagination from '../../components/Pagination/Pagination';
import { getPosts } from '../../services/posts';
import './style.css';  // Import the specific style for this page

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('public');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');

  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in local storage
        const fetchedPosts = await getPosts(token);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Error fetching posts');
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => post.is_private === (filter === 'private'));
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="feed-page">
      <TopBarGroup
        block="https://c.animaapp.com/M2klh9T2/img/block-2.svg"
        headerClassName="top-bar-group-instance"
        property1="default"
      />
      <div className="feed-content">
        <div className="filter-sidebar">
          <h2>Filter</h2>
          <div>
            <label>
              <input 
                type="radio" 
                name="filter" 
                value="public" 
                checked={filter === 'public'} 
                onChange={() => setFilter('public')} 
              /> 
              Public
            </label>
          </div>
          <div>
            <label>
              <input 
                type="radio" 
                name="filter" 
                value="private" 
                checked={filter === 'private'} 
                onChange={() => setFilter('private')} 
              /> 
              Private
            </label>
          </div>
        </div>
        <div className="posts-container">
          {error ? (
            <div className="error-message">{error}</div>
          ) : currentPosts.length === 0 ? (
            <div className="no-posts-message">No posts</div>
          ) : (
            currentPosts.map((post) => (
              <PostCardWithLike key={post._id} post={post} className="post-card-with-like-instance" />
            ))
          )}
        </div>
      </div>
      <Pagination
        className="pagination"
        totalPosts={filteredPosts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default FeedPage;
