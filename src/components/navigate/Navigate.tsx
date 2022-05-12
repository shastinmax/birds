import React from 'react';

import { current } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';

import s from './Navigate.module.css';

export const Navigate = () => {
  const currentIndex = 0;
  const birdsGroup = [
    { id: 0, description: 'Разминка' },
    { id: 1, description: 'Воробьиные' },
    { id: 2, description: 'Лесные птицы' },
    { id: 3, description: 'Певчие птицы' },
    { id: 4, description: 'Хищные птицы' },
    { id: 5, description: 'Морские птицы' },
  ];
  return (
    <div className={s.list}>
      {birdsGroup.map(({id,description}) => <NavLink key={id} to=''
                                     className={`${s.link} ${currentIndex === id ? s.active : ''}`}>{description}</NavLink>)}
    </div>
  );
};

