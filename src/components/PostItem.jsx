import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = ({post, number, remove}) => {

    return (
        <div className='post'>
            <div className='content'>
                <strong>{post.title}</strong> <i>Пост #{number}</i>
                <div className='text'>
                    {post.body}
                </div>
            </div>
            <div className='buttons'>
                <MyButton onClick={() => {remove(post)}}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;