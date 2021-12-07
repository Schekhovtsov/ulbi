import React, {useRef, useState} from 'react';
import './styles/app.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'First title', body: 'Props text'},
        {id: 2, title: 'Second title', body: 'Props text'},
        {id: 3, title: 'Third title', body: 'Props text'}
    ]);

    const [post, setPost] = useState({ title: '', body: '' });

    //const [title, setTitle] = useState('');
    //const [body, setBody] = useState('');

    const addNewPost = (e) => {

        e.preventDefault();

        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({  title: '',  body: ''});
        console.log(posts)
    }

    //const bodyInputRef = useRef();

    return (
        <div className='app'>

            <form className='myForm'>
                <div>
                    { /* Управляемый компонент - useState */ }
                    <MyInput type='text'
                             placeholder='Название поста'
                             value={post.title}
                             onChange={e => setPost({...post, title: e.target.value})} />
                </div>
                <div>
                    <MyInput type='text'
                             placeholder='Описание поста'
                             value={post.body}
                             onChange={e => setPost({...post, body: e.target.value})} />
                </div>
               <div>
                    <MyButton onClick={addNewPost}>Button</MyButton>
               </div>
            </form>

           <PostList posts={posts} title='Список постов'/>

        </div>
    );

}

export default App;
