import React, {useRef, useState} from 'react';
import './styles/app.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'First title', body: 'Raz'},
        {id: 2, title: 'Second title', body: 'Dva'},
        {id: 3, title: 'Third title', body: 'A Tri'}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [selectedSort, setSelectedSort] = useState('');

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort])
        ))
    }

    return (
        <div className='app'>
            <PostForm create={createPost} />
            <PostList posts={posts}
                      title='Список постов'
                      remove={removePost}
                      selectedSort={selectedSort}
                      sortPosts={sortPosts} />
        </div>
    );

}

export default App;
