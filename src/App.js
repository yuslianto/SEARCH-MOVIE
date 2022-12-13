import { useEffect } from 'react';
import { getMovieList } from './api';
import './App.css';
import Movies from './Movies';

const App = () => {

  useEffect(() => {
    getMovieList()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <input />
        <Movies />
      </header>
    </div>
  );
}

export default App;
