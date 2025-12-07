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
        <Text display={"whats up"}/>
        <Text />
        <Text />
        <Text />
      </>
  )
}

//Component and property
// function Text({display}) {
//   return (
//     <div>
//         <p>{display}</p>
//     </div>  
//   );
// }

export default App
