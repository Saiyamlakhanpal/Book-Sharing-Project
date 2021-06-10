import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';

import registerBook from './components/pages/RegisterBook';
import Find from './components/pages/Find';
function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ Home }/>
        
        <Route path="/registerBook" component={ registerBook }></Route>
        <Route path='/Find' component={ Find }></Route>
      </Switch>
    </Router>  
    </>
  );
}

export default App;
