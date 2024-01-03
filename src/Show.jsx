import React from 'react';
import Showproject from './pages/Showproject';
import './Show.css';
import Navbar from './Component/Navbar/Navbar';
import { useState } from 'react';
import { Toogle } from './Component/Toglle/Toggle';
import useLocalStorage from 'use-local-storage';

function Show() {
  const [isDark, setIsDark] = useLocalStorage(true);
  return (
    <div className="Show " data-theme={isDark ? 'light' : 'dark'}>
      <Navbar>
        {' '}
        <Toogle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </Navbar>
      <Showproject />
    </div>
  );
}

export default Show;
