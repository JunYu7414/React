// Start your app
//Importing few dependencies
// Connects React → HTML
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

//Rendering the App component inside the root element in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // BrowserRouter to enable routing in the app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
