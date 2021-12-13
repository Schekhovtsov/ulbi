import React, {useContext} from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import {AuthContext} from '../context/context';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();


    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('Auth', 'true');
        navigate('/posts');

    }

    return (
        <div className='app'>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type='text'
                         value='test'
                         disabled
                         placeholder='Логин'/>
                <MyInput type='password'
                         value='test'
                         disabled
                         placeholder='Пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;