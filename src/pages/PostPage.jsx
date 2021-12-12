import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import PostService from '../api/PostService';
import Preloader from '../UI/preloader/Preloader';

const PostPage = () => {

    const params = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchByPostId, isPostLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response)
    })

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response)
    })

    useEffect(() => {
        fetchByPostId(params.id);
        fetchComments(params.id)

    }, [])

    return (
        <div className='app'>

            <div className='post'>

                {isPostLoading
                    ?   <Preloader />
                    :   <div className='content'>
                            <strong>{post.title}</strong> <i>Пост #{post.id}</i>
                            <div className='text'>
                                {post.body}
                            </div>
                        </div>
                }

            </div>

                { isCommentsLoading
                    ? <Preloader />
                    :   <div className='comments'>
                        <h3>Комментарии</h3>
                        {
                            comments.map((comment) =>
                                <div className='comment'>
                                    <div className='author'>
                                        <i>{comment.email}</i>
                                    </div>
                                    <div className='text'>
                                        {comment.body}
                                    </div>
                                </div>
                            )
                        }
                        </div>
                }






        </div>
    );
};

export default PostPage;