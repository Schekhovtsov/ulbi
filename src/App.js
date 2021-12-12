import React from 'react';
import './styles/app.scss';
import Posts from './pages/Posts';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import About from './pages/About';
import Navbar from './UI/navbar/Navbar';
import PostPage from './pages/PostPage';

function App() {

    return (
       <BrowserRouter>

           <Navbar />

           <Routes>
               <Route path='/posts' element={<Posts />} />
               <Route path='/posts/:id' element={<PostPage />} />
               <Route path='/about' element={<About />} />
           </Routes>

       </BrowserRouter>
    );

}

export default App;
