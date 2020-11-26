import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from './MyPosts';


const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: text => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;