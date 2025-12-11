import { createContext, useState, useContext, useEffect } from "react";

//This creates the global shared container where your global data will live.
const MovieContext = createContext();

//Consumes the data from the context
//No need to type useContext(MovieContext) everywhere
export const useMovieContext = () => useContext(MovieContext)

//Provide state to any of the components that are wrapped around it 
//children prop represents the components that will be wrapped by this provider
//This provides the data we want
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    //Load favorites from local storage when the component mounts
    useEffect(() => {
        const storedFavs= localStorage.getItem("favourites");
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        } 
    }, []);

    //Save favorites to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        //Update the favorites state with array and React state updater
        //Take all the previous state (All the movies) and add the new movie to it
        //Cannot use push here because React does not detect changes when mutating the existing state
        setFavorites((prev) => [...prev, movie]);
    }

    const removeFromFavorites = (movieId) => {
        //Generating a new array where it contains only the movies that are not equal to the movieId passed in
        //Filter creates a new array
        setFavorites(prev => prev.filter(movie => movie.id !== movieId ));
    }

    const isFavorite = (movieId) => {
        //some checks if at least one element in the array passes the test implemented by the provided function
        return favorites.some(movie => movie.id === movieId); 
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    //Provider makes data available to all child components
    return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>
}

//createContext()	Creates the container	Without it, no shared data
// MovieProvider	Gives data to the container & shares it with components	Without it, context has no value
// Anything inside {children} can access that data — but only if they request it.

// useMovieContext	This is simply a shortcut that lets child components take data out of the box easily.

// Real Life Analogy
// Provider = WiFi Router

// It broadcasts the signal.

// useMovieContext = Connecting to WiFi

// Your phone must connect to use the internet.

// Router alone ≠ working internet.
// Phone alone ≠ internet.
// Together = works.