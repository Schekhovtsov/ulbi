import React, {useEffect, useMemo, useState} from 'react';
import './styles/app.scss';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import PostService from './api/PostService';
import Preloader from './UI/preloader/Preloader';
import {useFetching} from './hooks/useFetching';
import {getPagesArray, getPagesCount} from './utils/pages';
import Pagination from './UI/pagination/Pagination';


function App() {

    const [posts, setPosts] = useState([
/*        {id: 1, title: 'Первый пост', body: 'Текст первого поста'},
        {id: 2, title: 'Второй пост', body: 'Во втором посте текст такой'},
        {id: 3, title: 'Третий пост', body: 'А это текст в третьем посте'}*/
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);

    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const [postsData, postsCount] = await PostService.getAll(limit, page);
        setPosts(postsData);
        setTotalPages(getPagesCount(postsCount, limit));
    });

    useEffect(() => {
        fetchPosts()
    }, [page])

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

            {(isPostsLoading) && <Preloader />}

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
                        setFilter={setFilter}/>

            <Pagination totalPages={totalPages}
                        page={page}
                        changePage={changePage} />

        </div>
    );

}

export default App;
