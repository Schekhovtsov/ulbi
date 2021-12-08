import React, {useState} from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const PostForm = ({create}) => {

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        //setPosts([...posts, {...post, id: Date.now()}]);
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({  title: '',  body: ''})
    }

    return (
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
    );
};

export default PostForm;