import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../context/context';
import MyButton from '../button/MyButton';

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.remoItem('Auth');
        navigate('/login');
    }

    return (

        <div className='navbar'>
            <Link to='/posts'>Посты</Link>
            <Link to='/about'>To do</Link>
            {isAuth
                ? <Link to='/logout'
                        onClick={logout}>Выйти</Link>
                : <Link to='/login'>Логин</Link>}
        </div>

    );
};

export default Navbar;