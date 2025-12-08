import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("clicked")
    }
    //Use className instead of class because it conflicts with JS reserved word
    return <div className="movie-card">
        <div className="movie-poster">
            {/* Put as variable */}
            <img src={movie.url} alt={movie.title}></img>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard