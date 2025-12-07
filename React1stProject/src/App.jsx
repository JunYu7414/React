// Code here
import './App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';

// Main App component
//Always start with a capital letter
function App() {
  // JSX to be rendered
  const movieNumber = 1;
  
  return (
//Fragment to avoid extra divs
      <>
        <Home />
          {/* Example of conditional rendering: */}
          {movieNumber === 1 ? (<MovieCard movie={{title: "Inception", release_date: "2024"}} />) 
          : (<MovieCard movie={{title: "The Dark Knight", release_date: "2008"}} />)}

          {movieNumber === 2 && (<MovieCard movie={{title: "Interstellar", release_date: "2014"}} />)}
      </>
  )
}

//Component and property
function Text({display}) {
  return (
    <div>
        <p>{display}</p>
    </div>  
  );
}

export default App
