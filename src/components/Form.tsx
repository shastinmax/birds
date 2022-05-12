import React, { FC, useState } from 'react';

type propsType = {
  title: string
  handleClick: (login: string, pass: string) => void
}
export const Form: FC<propsType> = ({ title, handleClick }) => {
  const [login, setLogin] = useState<string>('bogdan04.06@gmail.com');
  const [pass, setPass] = useState<string>('bogdan04.06');
  return (
    <div>
      <input type='text' value={login} onChange={e => setLogin(e.currentTarget.value)} />
      <input type='password' value={pass} onChange={e => setPass(e.currentTarget.value)} />
      <button type='submit' onClick={() => handleClick(login, pass)}>{title}</button>
    </div>
  );
};

