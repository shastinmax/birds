import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/user-auth';

import s from './style.module.css';

import logo from 'assets/icons/logo.svg'

export const Header = () => {
  const { isAuth } = useAuth();

  return (
    <div className={s.wrapper}>
      <img className={s.headerLogo} src={logo} alt='logo' />
      <p>Count: 0</p>
      {/* {isAuth */}
      {/*   ? <NavLink to='/'>Home</NavLink> */}
      {/*   : <> */}
      {/*     <NavLink to='/login'>Login</NavLink> */}
      {/*     <NavLink to='/register'>Register</NavLink> */}
      {/*   </>} */}

    </div>
  );
};

