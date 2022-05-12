import React from 'react';

import { Navigate } from 'react-router-dom';

import { useAppDispatch } from '../hooks/redux-hooks';
import { useAuth } from '../hooks/user-auth';
import { removeUser } from '../redux/slices/userSlices';

export const Home = () => {

  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      home
      <button
        type='button'
        onClick={() => dispatch(removeUser())}
      >Log out from {email}</button>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

