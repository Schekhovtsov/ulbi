import React, {useEffect, useRef, useState} from 'react';
import '../styles/app.scss';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import MyModal from '../UI/MyModal/MyModal';
import MyButton from '../UI/button/MyButton';
import {usePosts} from '../hooks/usePosts';
import PostService from '../api/PostService';
import Preloader from '../UI/preloader/Preloader';
import {useFetching} from '../hooks/useFetching';
import {getPagesCount} from '../utils/pages';
import Pagination from '../UI/pagination/Pagination';
import {useObserver} from '../hooks/useObserver';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const getMoreElement = useRef();

    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const [postsData, postsCount] = await PostService.getAll(limit, page);
        setPosts([...posts, ...postsData]);
        setTotalPages(getPagesCount(postsCount, limit));
    });

    useObserver(getMoreElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    } )

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className='app'>

            <MyButton onClick={() => setModal(true)}>
                Добавить пост
            </MyButton>

            <MyModal title='Длбавить пост'
                     visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            {postError &&
                alert('На сервере произошла ошибка: ' +postError)
            }

            <PostList posts={sortedAndSearchedPost}
                      title='Список постов'
                      remove={removePost}
                      filter={filter}
                      setFilter={setFilter}
                      limit={limit}
                      setLimit={setLimit} />

            <Pagination totalPages={totalPages}
                        page={page}
                        changePage={changePage} />

            <div ref={getMoreElement}
                 style={{height:20, background: 'red'}}>
            </div>

            {isPostsLoading && <Preloader />}

        </div>
    );

}

export default Posts;
