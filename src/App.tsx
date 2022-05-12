import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Navigate } from './components/navigate/Navigate';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import s from 'App.module.css'

export const App = () => (
  <div className={s.container}>
    <Header />
    <Navigate/>
    {/* <Routes> */}
    {/*   /!* <Route path='/' element={<Home />} /> *!/ */}
    {/*   /!* <Route path='/login' element={<Login />} /> *!/ */}
    {/*   /!* <Route path='/register' element={<Register />} /> *!/ */}
    {/* </Routes> */}
  </div>
);

