import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_POSTS_SUCCESS } from '../redux/action';
import { useParams } from 'react-router-dom'; // Import useParams và useHistory

const EditPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Sử dụng useParams để lấy giá trị của tham số id từ URL
//   const history = useHistory(); // Sử dụng useHistory để chuyển hướng

  const post = useSelector(state => state.posts.find(post => post.id === parseInt(id)));
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.body);
    }
  }, [post]);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(FETCH_POSTS_SUCCESS(id, { title, body: content }));
    alert('Post updated successfully');
    // history.push('/');
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <textarea placeholder="Content" value={content} onChange={handleContentChange}/>
      <button onClick={handleSubmit}>Update Post</button>
    </div>
  );
};

export default EditPost;