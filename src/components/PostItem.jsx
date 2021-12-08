import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = ({post, number, remove}) => {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{post.title}</strong> <i>Post #{number}</i>
                <div className='post__text'>
                    {post.body}
                </div>
            </div>
            <div className='post__buttons'>
                <MyButton onClick={() => {remove(post)}}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;