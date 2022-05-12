import React from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

import { Form } from '../components/Form';
import { useAppDispatch } from '../hooks/redux-hooks';
import { useAuth } from '../hooks/user-auth';
import { setUser } from '../redux/slices/userSlices';

export const Login = () => {
  const dispatch = useAppDispatch();

  const { isAuth } = useAuth();

  const handleLogin = async (login: string, password: string) => {
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, login, password);
    dispatch(setUser({
      email: user.email,
      id: user.uid,
      token: user.refreshToken,
    }));
  };

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <Form title='login' handleClick={handleLogin} />
    </div>
  );
};

