import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';
import AssetExample1 from './components/AssetExample - Copy';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {contador: 0, contador1: 0}
    this.incrementar = this.incrementar.bind(this)
    this.incrementar1 = this.incrementar1.bind(this)
    this.incrementar2 = this.incrementar2.bind(this)
  }
  

  incrementar(){
    Alert.alert('Gol do Fortaleza EC!')
    let result = this.state.contador + 1

    let s = this.state
    s.contador = result
    this.setState(s)
  }
  
  incrementar1(){
    Alert.alert('Gol do Ceará!')
    let result = this.state.contador1 + 1

    let s = this.state
    s.contador1 = result
    this.setState(s)
  }
  
  incrementar2(){
    Alert.alert('Fim de Partida! Botões Bloqueados!')
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Brasileirão 2019
        </Text>
        <Text style={styles.paragraph1}>
          Castelão - 03/08 21h.
        </Text>
          
          <View style={styles.card}>
            <Card>
              <AssetExample />
            </Card>
            <Text style={styles.x}> X </Text>
            <Card>
              <AssetExample1 />
            </Card>
          </View>
          
          
          <View style={styles.placar}>
          <Text> {this.state.contador} </Text>
          <Text> {this.state.contador1} </Text>
          </View>


        <View style={styles.btn}>
        <Button  onPress={this.incrementar} title="Gol" /> 
        <Button  onPress={this.incrementar1} title="Gol" />  
        </View>

        <Button onPress={this.incrementar2} title="Fim de Partida" /> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#ddd',
  },
  x: {
    paddingTop:90,
    fontSize: 15,
    fontWeight: 'bold',

  },
  placar: {
    flexDirection: 'row',
    paddingTop:20,
    margin: 25,

  },

  card: {
    flexDirection: 'row',
    paddingTop:20,
  },
  btn:{
    flexDirection: 'row',
    paddingTop:30,
    margin: 20
  },
  
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
   paragraph1: {
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
