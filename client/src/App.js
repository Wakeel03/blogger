import { useEffect } from 'react';
import './App.css';
import { getAllPosts } from './api/index.js'

function App() {
  useEffect(() => {
    getAllPosts().then(res => console.log(res));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
