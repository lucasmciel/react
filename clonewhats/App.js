
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './src/reducers';

class App extends Component {
  
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCWPg8dVbJC1_GYGyVP35IFeJWZULx7Md0",
      authDomain: "wpp-clone-74bec.firebaseapp.com",
      databaseURL: "https://wpp-clone-74bec.firebaseio.com",
      projectId: "wpp-clone-74bec",
      storageBucket: "wpp-clone-74bec.appspot.com",
      messagingSenderId: "431047641641"
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store= { createStore( reducers, {}, applyMiddleware(ReduxThunk) ) }>
        <Routes />
      </Provider>
    );
  }
}

export default App;