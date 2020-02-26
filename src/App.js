import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './containers/Aboutus';
import Posts from './containers/Post';
import ContactUs from './containers/ContactUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='App'>
      <Header />
      <Hero />
      <Route path='/'exact component={Home}/>
      <Route path='/about-us' component={AboutUs}/>
      <Route path='/posts' component={Posts}/>
      <Route path='/contact-us' component={ContactUs}/>
    </div>
    </Router> 
  );
}

export default App;
