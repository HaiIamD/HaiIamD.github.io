import './App.css';
import Education from './Component/Education/Education';
import Experience from './Component/Experience/Experience';
import Fotter from './Component/Fotter/Fotter';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Project/Project';
import Skill from './Component/Skill/Skill';
import { useState } from 'react';
import { Toogle } from './Component/Toglle/Toggle';
import useLocalStorage from 'use-local-storage';

function App() {
  const [isDark, setIsDark] = useLocalStorage(true);
  return (
    <div className="App" data-theme={isDark ? 'light' : 'dark'}>
      <Navbar>
        {' '}
        <Toogle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </Navbar>
      <Header />
      <Experience />
      <Project />

      <Skill />
      <Education />

      <Fotter />
    </div>
  );
}

export default App;
