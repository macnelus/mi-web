import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


import Home from './pages/Home';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Video from './pages/Portfolio/Video'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/blog" component={Blog} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/video" component={Video} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
