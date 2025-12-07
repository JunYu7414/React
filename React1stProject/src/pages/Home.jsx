import MovieCard from '../components/MovieCard'

function Home() {
    // Array of movie objects
    const movies = [
        {id: 1, title: "Harry Potter", release_date: "2001"},
        {id: 2, title: "Ter", release_date: "2411"},
        {id: 3, title: "wwer", release_date: "2252"},
        {id: 4, title: "Wicked", release_date: "2023"},
    ]

    const handleSearch = () => {

    }

    return (
        <div className="home">
            {/* // Searchbar and when submit a function will handle the search*/}
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text' placeholder='Search for movies...' className="search-input"></input>
                <button type='submit' className='search-button'>Search</button>
            </form>
            <div className="movies-grid">
                {/* // .map iterates through each movie in the movies array */}
                {movies.map(movie => 
                    (<MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home 