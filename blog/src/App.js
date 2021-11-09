import Home from "./pages/Home"
import {BrowserRouter as Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <div className="max-w-screen-md mx-auto pt-20">
        <Route exact path="/" component={Home} />        
      </div>
    </Routes>
  );
}

export default App;
