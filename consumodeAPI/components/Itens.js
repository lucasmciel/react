import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class Itens extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Foto}>
          <Image style={{height: 100, width: 100}} source= {{uri: this.props.item.foto}} />
        </View>

        <View style={styles.Conteudo}>
          <Text> {this.props.item.titulo} </Text>
          <Text> R$ {this.props.item.valor} </Text>
          <Text> Local: {this.props.item.local_anuncio} </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    borderWidth: 0.7,
    borderColor: '#222',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },

  Foto: {
    width: 102,
    height: 102
  },

  Conteudo: {
    flex: 1,
    marginLeft: 20,
    marginTop: 10,

  },
});
