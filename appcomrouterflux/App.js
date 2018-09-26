import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';

export default class App extends React.Component {
  render() {
    return (
     <Router sceneStyle={{ paddingTop: 50}}>
      
      <Scene key= 'principal' component={Principal} initial title= "Cara ou Coroa" />
      <Scene key= 'sobrejogo' component={SobreJogo} title= "Sobre"/>
      <Scene key= 'outrosjogos' component={OutrosJogos} title= "Outros" />

     </Router>
    );
  }
}