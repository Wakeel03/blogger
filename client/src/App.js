import { useEffect } from 'react';
import './App.css';
import { getAllPosts } from './api/index.js'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    getAllPosts().then(res => console.log(res));
  }, [])

  return (
    <div className="max-w-screen-xl mx-auto">
      <header className="h-20 flex items-center mb-4">
        <Navbar />
      </header>

      <section>
        <Home />
      </section>
    </div>
  );
}

export default App;
