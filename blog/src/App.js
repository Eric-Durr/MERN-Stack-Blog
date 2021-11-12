import {
  BrowserRouter as Router,
  Routes, 
  Route,
  } from "react-router-dom";

// COMPONENTS

import Home from "./pages/Home"
import About from "./pages/About"
import ArticlesList from "./pages/ArticlesList"
import Article from "./pages/Article"
import Navbar from "./components/Navbar";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/about" element={ <About/> }/>
          <Route exact path="/articles-list" element={ <ArticlesList/> }/>
          <Route exact path="/article/:name" element={ <Article/> }/>
          <Route exact path="*" element={ <NoMatch/> }/>
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
