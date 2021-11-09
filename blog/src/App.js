import Home from "./pages/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
          <Route exact path="/">
            <Home />
          </Route>
    </Router>
  );
}

export default App;
