import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/Index';

import EntryList from './components/EntryList';
import EntryForm from './components/EntryForm';
import Navigation from './components/Navigation';
import EntryDetails from './components/EntryDetails';

function App () {
  return (
    <div className='App'>
      <Router>
      <Navigation/>
        <div className="MainContent">
      
        <Route path='/' exact component={Index}/>
        
        <Route path='/entries' exact component={EntryList}/>
        <Route path='/entries/:id' component={EntryDetails}/>
        <Route path='/form' component={EntryForm}/>

      
      </div>
      </Router>
    </div>
  )
}

export default App
