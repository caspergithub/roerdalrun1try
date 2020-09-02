import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Frontpage from './components/frontpage/Frontpage';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Distances from './components/distances/Distances';
import Registation from './components/registration/Registration';
import Participants from './components/participants/Participants';
import Registered from './components/registered/Registered';

function App() {

  // state til at gemme login data
  const [loginData, setLoginData] = useState([])
  // console.log("App -> loginData", loginData)

  // useEffect der gemmer login data
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoginData(JSON.parse(sessionStorage.getItem("token")))
    }
  }, [])

  useEffect(() => {
    console.log(loginData)
  }, [loginData])

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
      <Navbar loginData={loginData} setLoginData={setLoginData}/>
      <Switch>
        <Route path="/registered">
          <Registered/>
        </Route>
        <Route path="/participants">
          <Participants loginData={loginData} setLoginData={setLoginData} doFetch={doFetch}/>
        </Route>
        <Route path="/registration">
          <Registation loginData={loginData} setLoginData={setLoginData} doFetch={doFetch}/>
        </Route>
        <Route path="/distances">
          <Distances doFetch={doFetch}/>
        </Route>
        <Route path="/About">
          <About doFetch={doFetch}/>
        </Route>
        <Route path="/">
          <Frontpage doFetch={doFetch} />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
