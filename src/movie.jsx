import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const Movie = ({movie, editFav, fav}) => {
  const isFav = fav.some(m => m.imdbID === movie.imdbID)
    return (<li className="filmCard" key={movie.imdbID} style={{ marginBottom: '20px' }}>
          {isFav ? <FaHeart className="heart fill" onClick={() => editFav(movie)}/> : <FaRegHeart className="heart" onClick={() => editFav(movie)}/>}
          <img 
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/100x150?text=No+Image"} 
            alt={movie.Title} 
            width="100%" 
            height="300" 

          />
          <span className="title">{movie.Title} ({movie.Year})</span> 
    </li>)
}
export default Movie;