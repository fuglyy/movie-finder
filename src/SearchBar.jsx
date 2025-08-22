const SearchBar = ({film, setFilm, onSearch}) => {
    return (
    <div className="searchBar">
        <h1>Movie Finder</h1>
        <label> <input
        value={film}
        onChange={(e) => setFilm(e.target.value)}
        placeholder="Найти фильм"
        />
        </label>
        <button onClick={onSearch} className="searchBtn">Поиск</button>
    </div>)
}

export default SearchBar