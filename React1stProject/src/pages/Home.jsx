import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import "../css/Home.css"

function Home() {

    //Set the state and the function to update it //Set the default value
    //Define state which will store what the user types in the search bar and use it later
    //Every time the user types something new, setSearchQuery will update the searchQuery state and re-render the component
    //Make sure to define the state inside the component function
    const [searchQuery, setSearchQuery] = useState(""); 
    
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    //Set to true because when the component loads, we will be using this useEffect to fetch data
    const [loading, setLoading] = useState(true);

    //Put a function here you want to call when the dependency array changes
    //If the array is empty, the function runs only once when the component mounts
    //Check every single re-render and if its changed, we run the function again
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])


    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setSearchQuery("-------");
    }

    return (
        <div className="home">
            {/* // Searchbar and when submit a function will handle the search*/}
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text' 
                placeholder='Search for movies...' 
                className="search-input"
                // Bind the input value to the searchQuery state and update it on change
                value={searchQuery} 
                // set the searchQuery state to whatever the user types in
                onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
                <button type='submit' className='search-button'>Search</button>
            </form>

            {/* // Display error message if there is an error */}
            {/* Example of conditional rendering with && */}
            {error && <div className='error-message'>{error}</div>}

            {loading ? <div>Loading...</div> : 
            <div className="movies-grid">
                {/* // .map iterates through each movie in the movies array */}
                {movies.map((movie) => 
                    <MovieCard movie={movie} key={movie.id}/>
                )}
            </div>}
            
        </div>
    )
}

export default Home 