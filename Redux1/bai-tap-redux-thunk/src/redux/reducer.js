import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    ADD_POST
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