import React from 'react';
import {reducer} from './reducers'
import {connect} from 'react-redux'
import Civilizations from './components/Civilizations'

import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

function makeStateFromProps(state){
  return{
    id:state.id,
    name:state.name,
    army_type:state.army_type,
    team_bonus:state.team_bonus
  }
}

export default connect(makeStateFromProps, {})(App);
