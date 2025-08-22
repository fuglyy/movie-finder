import Movie from "./movie"

const MovieList = ({movies, editFav, fav}) => {
    
    return (<ul className="movieList"> 
        {movies.map((m) => (<Movie key={m.imdbID} movie={m} editFav={editFav} fav={fav}/>))}
    </ul>)
}

export default MovieList