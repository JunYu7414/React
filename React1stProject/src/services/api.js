const API_KEY = "42827c42fe8122e7dc40398dcfc938f3";
const BASE_URL = "https://api.themoviedb.org/3";

// Function to fetch popular movies from the API
//async use await inside and returns a promise
export const getPopularMovies = async () => {
    // Fetch data from the API
    //await pauses the function until the promise is resolved
    //fetch returns a promise that resolves to the Response object
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    // Parse the JSON response
    const data = await response.json()
    // Return the results array
    return data.results;
}

export const searchMovies = async (query) => {                              
                                                                            //query needs to be encoded to be URL safe
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}