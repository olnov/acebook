import React, { useEffect, useState } from 'react';
import PostCardWithLike from '../../components/PostCardWithLike/PostCardWithLike';
import Pagination from '../../components/Pagination/Pagination';
import { getPosts } from '../../services/posts';
import TopBarGroup from '../../components/TopBarGroup/TopBarGroup';
import './style.css';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // 3 rows * 2 columns = 6 posts per page
  const [filter, setFilter] = useState('Public');

  const fetchPosts = async () => {
    const token = localStorage.getItem('token');
    try {
      const fetchedPosts = await getPosts(token);
      console.log('Fetched Posts:', fetchedPosts); // Log fetched posts
      setPosts(Array.isArray(fetchedPosts) ? fetchedPosts : []); // Ensure posts is an array
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter posts based on the selected filter
  const filteredPosts = currentPosts.filter(post => filter === 'Public' ? !post.isPrivate : post.isPrivate);

  return (
    <div className="feed-page">
      <TopBarGroup property1={localStorage.getItem('token') ? 'logged-in' : 'default'} />
      <div className="feed-container">
        <div className="filter-container">
          <h3>Filter</h3>
          <label>
            <input
              type="radio"
              name="filter"
              value="Public"
              checked={filter === 'Public'}
              onChange={(e) => setFilter(e.target.value)}
            />
            Public
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="Private"
              checked={filter === 'Private'}
              onChange={(e) => setFilter(e.target.value)}
            />
            Private
          </label>
        </div>
        <div className="posts-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="posts-grid">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <PostCardWithLike key={post._id} post={post} />
                ))
              ) : (
                <p>No posts available</p>
              )}
            </div>
          )}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
