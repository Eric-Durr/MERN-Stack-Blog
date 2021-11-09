import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
