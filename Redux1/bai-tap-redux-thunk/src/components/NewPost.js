import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/action';

const NewPost = ({ history }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addPost({ title, body: content }));
    alert('Post created successfully');
    history.push('/');
  };

  return (
        <form>
            <table>
      <h1>New Post</h1>
      <strong>Title</strong> <br/>
     <input type="text"  value={title} onChange={handleTitleChange} /> <br /> <br/>
     <strong>Content</strong> <br/>
      <textarea  value={content} onChange={handleContentChange} /> <br/>
      <button onClick={handleSubmit}>Add</button>
      </table>
      </form>
  );
};

export default NewPost;