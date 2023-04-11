import axios from "axios";

// Action types
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const ADD_POST = "ADD_POST";

// Action creators
export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const addPost = (title, body) => {
    return {
      type: ADD_POST,
      payload: { title, body }
    };
  };

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// Async action creator
export const fetchPosts = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};


export const createPost = (title, body) => {
    return (dispatch) => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", { title, body }) // Use axios.post() for POST request
        .then((response) => {
          // Dispatch success action
          dispatch(addPost(title, body));
        })
        .catch((error) => {
          // Dispatch failure action
          console.error(error);
        });
    };
  };