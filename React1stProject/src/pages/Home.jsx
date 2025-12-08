import MovieCard from '../components/MovieCard'
import { useState } from 'react';
import "../css/Home.css"

function Home() {

    //Set the state and the function to update it //Set the default value
    //Define state which will store what the user types in the search bar and use it later
    //Every time the user types something new, setSearchQuery will update the searchQuery state and re-render the component
    //Make sure to define the state inside the component function
    const [searchQuery, setSearchQuery] = useState(""); 
    // Array of movie objects
    const movies = [
        {id: 1, title: "Harry Potter", release_date: "2001"},
        {id: 2, title: "Ter", release_date: "2411"},
        {id: 3, title: "wwer", release_date: "2252"},
        {id: 4, title: "Wicked", release_date: "2023"},
    ]

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
            <div className="movies-grid">
                {/* // .map iterates through each movie in the movies array */}
                {movies.map((movie) => 
                    <MovieCard movie={movie} key={movie.id}/>
                )}
            </div>
        </div>
    )
}

export default Home 