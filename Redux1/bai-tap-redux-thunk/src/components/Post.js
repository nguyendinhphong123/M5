import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/action";
import { Link } from "react-router-dom"; // Import Link

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Post</h1>
      <Link to="/new-post"> {/* Sử dụng Link để định nghĩa liên kết đến trang NewPost */}
        <button>Add new Post</button>
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to="/edit/:id"> {/* Sử dụng Link để định nghĩa liên kết đến trang NewPost */}
                <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;