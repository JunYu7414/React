// Code here
import './App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Favourite from './pages/Favourites';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          {/* // Define routes for Home and Favourites pages */}
          {/* //Element to display component when route matches */}
          <Route path='/' element={<Home />}/>
          <Route path='/Favourites' element={<Favourite />}/>
        </Routes>
      </main>
    </div>
  );
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
