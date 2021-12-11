import React from 'react';
import './styles/app.scss';
import Posts from './routes/Posts';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import About from './routes/About';
import Navbar from './UI/navbar/Navbar';

function App() {

    return (
       <BrowserRouter>

           <Navbar />

           <Routes>
               <Route path='posts' element={<Posts />} />
               <Route path='about' element={<About />} />
               <Route path="*" element={<Navigate replace to='/posts'/>} />
           </Routes>

       </BrowserRouter>
    );

}

export default App;
