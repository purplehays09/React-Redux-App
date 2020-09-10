import React, { useEffect,useState } from 'react';
import axios from 'axios'
import {reducer} from './reducers'
import {connect} from 'react-redux'
import Civilizations from './components/Civilizations'

import './App.css';

function App() {
  const [civsArray,setCivsArray] = useState([])

  useEffect(() => {
    console.log("PAGE LOAD ===>")
    axios.get('http://cors-anywhere.herokuapp.com/http://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
      .then(res => {
        console.log('AXIOS RESPONSE ===>',res.data)
        setCivsArray(res.data.civilizations)
      })
      .catch(err => console.log("AXIOS ERROR ===>",err))
  },[])
  return (
    <div className="App">
      <Civilizations civsArray={civsArray}/>

    </div>
  );
}

function makeStateFromProps(state){
  return{
    civsArray: state.civsArray
  }
}

export default connect(makeStateFromProps, {})(App);
