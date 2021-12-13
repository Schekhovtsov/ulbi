import React, {useEffect, useState} from 'react';
import './styles/app.scss';
import Posts from './pages/Posts';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import About from './pages/About';
import Navbar from './UI/navbar/Navbar';
import PostPage from './pages/PostPage';
import {publicRoutes, privateRoutes} from './router/routes';
import {AuthContext} from './context/context';
import Preloader from './UI/preloader/Preloader';

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('Auth')) {
            setIsAuth(true)
        };
        setIsInitialized(true);
    }, []);

    if (!isInitialized) {
        return <Preloader />
    }

    // Роутер начинает работать только после инициализации
    // так избавились от редиректа при обновлении страницы

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isInitialized,
        }}>
            <BrowserRouter>

                <Navbar/>

                {isAuth
                    ? <Routes>
                        {privateRoutes.map(route =>
                            <Route path={route.path}
                                   element={route.element}
                                   exact={route.exact}
                                   key={route.path}
                            />
                        )}
                        <Route path="*"
                               element={<Navigate replace to="/posts"/>}/>
                    </Routes>

                    : <Routes>
                        {publicRoutes.map(route =>
                            <Route path={route.path}
                                   element={route.element}
                                   exact={route.exact}
                                   key={route.path}
                            />
                        )}
                        <Route path="*"
                               element={<Navigate replace to="/login"/>}/>
                    </Routes>
                }

            </BrowserRouter>
        </AuthContext.Provider>
    );

}

export default App;
