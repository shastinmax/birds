import React from 'react';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { Form } from '../components/Form';
import { useAppDispatch } from '../hooks/redux-hooks';
import { setUser } from '../redux/slices/userSlices';

export const Register = () => {
  const dispatch = useAppDispatch();

  const handleRegister = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form title='register' handleClick={handleRegister} />
    </div>
  );
};
       
