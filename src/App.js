import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Frontpage from './components/frontpage/Frontpage';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Distances from './components/distances/Distances';
import Registation from './components/registration/Registation';

function App() {

  // one fetch to rule them all
  async function doFetch(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/registration">
          <Registation/>
        </Route>
        <Route path="/distances">
          <Distances doFetch={doFetch}/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/">
          <Frontpage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
