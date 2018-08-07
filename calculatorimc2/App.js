import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {num: 0, num1: 0, resultado: 0, resultadotext: ""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.num1 / (this.state.num * this.state.num)

    let s = this.state
    s.resultado = imc
    
    if(s.resultado < 16){
      s.resultadotext = "Magreza Grave"
    } else if (s.resultado < 17){
      s.resultadotext = "Magreza Moderada"
    } else if (s.resultado < 18.5){
      s.resultadotext = "Magreza Leve"
    } else if (s.resultado < 25){
      s.resultadotext = "Saudável"
    } else if (s.resultado < 30){
      s.resultadotext = "Sobrepeso"
    } else if (s.resultado < 35){
      s.resultadotext = "Obesidade I"
    } else if (s.resultado < 40){
      s.resultadotext = "Obesidade II"
    } else {
      s.resultadotext = "Obesidade III"
    }

    this.setState(s)

  }
  
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Cálculo de IMC
        </Text>

        <TextInput style={styles.btn} placeholder= "Digite sua Massa" keyboardType='numeric' onChangeText={(num1) => this.setState({num1})}/>
        
        <TextInput style={styles.btn} placeholder= "Digite sua Altura" keyboardType='numeric' onChangeText={(num) => this.setState({num})} />

        <Button  onPress = {this.calcular} title= "Calcular"  /> 

        <Text style={styles.resultado}> {this.state.resultado.toFixed(1)} </Text>
        <Text style={styles.resultadotext}> {this.state.resultadotext} </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  resultado:{
    opacity: 0.5,
    fontSize: 35,
    margin: 40,
    textAlign: 'center',
    width: 200,
    height: 100
  },
  resultadotext:{
    opacity: 0.5,
    fontSize: 35,
  },
  btn: {
    height: 80,
    width: 300,
    fontSize: 30
  },
  paragraph: {
    margin: 15,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
