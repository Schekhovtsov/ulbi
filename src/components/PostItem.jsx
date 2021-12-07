import React from 'react';

const PostItem = ({post, number}) => {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{post.title}</strong> <i>Post #{number}</i>
                <div className='post__text'>
                    {post.body}
                </div>
            </div>
            <div className='post__buttons'>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;