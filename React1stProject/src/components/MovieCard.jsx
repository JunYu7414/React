import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("clicked")
    }
    //Use className instead of class because it conflicts with JS reserved word
    return <div className="movie-card">
        <div className="movie-poster">
            {/* Put as variable */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            {/* //split the release date string at the hyphen and get the first part (year) */}
            <p>{movie.release_date?.split("-"[0])}</p>
        </div>
    </div>
}

export default MovieCard