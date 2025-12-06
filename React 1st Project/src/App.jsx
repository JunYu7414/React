// Code here
import './App.css'

// Main App component
//Always start with a capital letter
function App() {
  // JSX to be rendered
  return (
//Fragment to avoid extra divs
      <>
        <div>
          <p>hello world</p>
        </div>
        <Text />
        <Text />
      </>
  )
}

//Component
function Text() {
  return (
    <div>
        <p>hello world</p>
    </div>  
  );
}

export default App
