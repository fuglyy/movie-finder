import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

const HomePage = ({fav, editFav}) => {
    const [film, setFilm] = useState('');
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const API_KEY = "948c07f9"

    useEffect(() => {
      const fetchFilms = async() => {
        const popularKey = ['love', 'world', 'man', 'super', 'city', 'star', 'dream'];
        const randomKey = popularKey[Math.floor(Math.random() * popularKey.length)];
        try{
          const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${randomKey}`)
          const data = await res.json();
          if (data.Response) {
            setAllMovies(data.Search);
            setFilteredMovies(data.Search)
          }
          else{
            console.error('API Error: ', data.error)
          }
        } catch{
            console.error('Fetch Error: ', error)
        }
      };
      fetchFilms()
    }, [])

    const searchMovies = async() =>{
        if (!film.trim()) {
          setFilteredMovies(allMovies);
          return; 
        }
        try{
          const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${film}`)
          const data = await res.json();
          if (data.Search) {
            setFilteredMovies(data.Search);
          }
          else{
            setFilteredMovies([]);
          }
        }
        catch (error) {
          console.error('Ошибка поиска:', error);
        }
        
    }
    return (
    <div>
      <SearchBar film={film} setFilm={setFilm} onSearch={searchMovies}/>
      
      <MovieList  movies={filteredMovies} editFav={editFav} fav={fav}/>
      
    </div>)
}

export default HomePage