import React, {useMemo, useState} from 'react';
import './styles/app.scss';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/button/MyButton';

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Первый пост', body: 'Текст первого поста'},
        {id: 2, title: 'Второй пост', body: 'Во втором посте текст такой'},
        {id: 3, title: 'Третий пост', body: 'А это текст в третьем посте'}
    ]);

    const [modal, setModal] = useState(false);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts]);

    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(p =>
            p.title.toLowerCase().includes(filter.query.toLowerCase())
        )
    }, [filter.query, sortedPosts]);



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
