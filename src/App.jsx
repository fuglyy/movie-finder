import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import FavPage from './FavPage';

export default function App() {

  const [fav, setFav] = useState(() => {
    const savedFav = localStorage.getItem('favourites');
    return savedFav ? JSON.parse(savedFav) : [];
  });

  const editFav = (movie) => {
    const isFav = fav.find(m => m.imdbID === movie.imdbID);
    if (isFav){
      setFav(prev => prev.filter(m => m.imdbID != movie.imdbID))
    }
    else{
      setFav(prev => [...prev, movie]);
    }
  }

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(fav));
  }, [fav])



  return (
  <Router>
    <nav className='header'>
      <Link to="/">Главная</Link>
      <Link to="/favorites">Избранное</Link>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage fav={fav} editFav={editFav}/>} />
      <Route path="/favorites" element={<FavPage fav={fav} editFav={editFav}/>} />
    </Routes>
  </Router>)
}

