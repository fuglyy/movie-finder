import MovieList from './MovieList';

const FavPage = ({fav, editFav}) => {
    if (fav.length != 0){
        return (
            <div>
                <h1>Ваши любимые фильмы</h1> 
                <MovieList movies={fav} editFav={editFav} fav={fav}/> 
            </div>
        )
    }
    else {
        return (
        <div>
            <h1>Ваши любимые фильмы</h1> 
            <h2>Здесь пока пусто(</h2>
        </div>)
    }
         
}

export default FavPage