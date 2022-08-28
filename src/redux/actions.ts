import * as types from "./actionType";
import axios from "axios";
import { POST_BASE_URL } from "../appConfig";

const getPost = (users: any) => ({
  type: types.GET_POST,
  payload: users,
});

export const loadPost = () => {
  return async (dispatch: any) => {
    try {
      const resp = await axios.get(`${POST_BASE_URL}`);
      dispatch(getPost(resp.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = (post:any) => {
    return async (dispatch: any) => {
      try {
        const resp = await axios.post(POST_BASE_URL,{...post});
        if(resp.data){
            alert(`Post created successfully with id: ${resp.data.id}`)
            dispatch(getPost(resp.data));
        }
        // console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
};

export const deletePost = (postId:any) => {
return async (dispatch: any) => {   
    try {
    const resp = await axios.delete(`${POST_BASE_URL}/${postId}`);
    if(resp.data){
        alert(`Post removed successfully with id: ${postId}`)
    }
    } catch (error) {
    console.log(error);
    }
};
};    

export const updatePost = (postId:any, post:any) => {
return async (dispatch: any) => {
    try {
    const resp = await axios.put(`${POST_BASE_URL}/${postId}`,{...post});
    if(resp.data){
        alert(`Post updated successfully with id: ${resp.data.id}`)
        dispatch(getPost(resp.data));
    }
    console.log(resp.data);
    } catch (error) {
    console.log(error);
    }
};
};

