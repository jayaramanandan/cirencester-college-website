import type { Component } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <button class="text-3xl text-white font-bold bg-slate-900 hover:bg-slate-800 hover:rounded-md width-16 cursor-pointer">
      Hello world!
    </button>
  );
};

export default App;
