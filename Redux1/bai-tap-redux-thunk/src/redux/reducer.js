import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    ADD_POST,
    ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  } from "./action";
  
  const initialState = {
    posts: [],
    error: null,
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
          error: null,
        };
        break;
        case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
      case ADD_POST_SUCCESS:
      return {      
        ...state,
        posts: [...state.posts, action.payload],
        error: null,
      };
      case ADD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

      case FETCH_POSTS_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postReducer;