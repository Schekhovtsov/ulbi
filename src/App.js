import React, {useEffect, useMemo, useState} from 'react';
import './styles/app.scss';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/button/MyButton';
import {usePosts} from './hooks/usePosts';


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Первый пост', body: 'Текст первого поста'},
        {id: 2, title: 'Второй пост', body: 'Во втором посте текст такой'},
        {id: 3, title: 'Третий пост', body: 'А это текст в третьем посте'}
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()

        return () => {
            // Очитска
        }
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const fetchPosts = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts?limit=2')
        if (response.ok) {
            const data = await response.json();
            setPosts(data)
        }   else    {
            alert('Ошибка HTTP: ' + response.status)
        }

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

            <PostList posts={sortedAndSearchedPost}
                      title='Список постов'
                      remove={removePost}
                      filter={filter}
                      setFilter={setFilter}/>
        </div>
    );

}

export default App;
