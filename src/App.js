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


function App() {

    const [posts, setPosts] = useState([
/*        {id: 1, title: 'Первый пост', body: 'Текст первого поста'},
        {id: 2, title: 'Второй пост', body: 'Во втором посте текст такой'},
        {id: 3, title: 'Третий пост', body: 'А это текст в третьем посте'}*/
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts)
    });

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
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

            {postError && <h1>Произошла ошибка: ${postError}</h1>}

                <PostList posts={sortedAndSearchedPost}
                            title='Список постов'
                            remove={removePost}
                            filter={filter}
                            setFilter={setFilter}/>}


        </div>
    );

}

export default App;
