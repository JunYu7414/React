import "../css/favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourite() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (<div>
            <h2>Your Favourite Movies</h2>
                    <div className="movies-grid">
                    {/* // .map iterates through each movie in the movies array */}
                    {favorites.map((movie) => 
                        <MovieCard movie={movie} key={movie.id}/>
                    )}
                    </div>
                </div>)
            
    }
    return <div className="favourites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appear here!</p>
    </div>
}

export default Favourite 