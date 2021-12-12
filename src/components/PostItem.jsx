import React from 'react';
import MyButton from '../UI/button/MyButton';
import {Link, useNavigate, Navigate} from 'react-router-dom';

const PostItem = ({post, number, remove}) => {

    const navigate = useNavigate()

    const myRedirect = () => {
        navigate('/posts/'+post.id)
    }

    return (
        <div className='post'>
            <div className='content'>
                <strong>{post.title}</strong> <i>Пост #{post.id}</i>
                <div className='text'>
                    {post.body}
                </div>
            </div>
            <div className='buttons'>
                <MyButton onClick={() =>
                 myRedirect()
                }>
                    Открыть
                </MyButton>
                <MyButton onClick={() => {remove(post)}}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;