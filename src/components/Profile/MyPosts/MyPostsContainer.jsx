import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
    

    return (
        <StoreContext.Consumer>
            {store => {
                const addNewPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                const onChange = text => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                return (
                    <MyPosts
                        posts={store.getState().profilePage.posts}
                        updateNewPostText={onChange}
                        addPost={addNewPost}
                        newPostText={store.getState().profilePage.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;