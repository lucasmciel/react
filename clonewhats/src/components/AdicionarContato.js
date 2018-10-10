import React, {Component} from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import {connect} from 'react-redux';
import {modificaAdicionaContatoEmail, adicionaContato} from '../actions/AppActions'

class AdicionarContato extends Component{
    renderAdicionarContato(){
        if(!this.props.cadastro_resultadoo_inclusao){
            return(
                <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TextInput
                        value= {this.props.adicona_contato_email}
                        placeholder='E-mail'
                        style={{ fontSize: 20, height: 45 }}
                        onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto) }
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <Button title="Adicionar" color="#115E54" onPress={() => this.props.adicionaContato(this.props.adicona_contato_email) } />

                    <Text style= { {color: '#ff0000', fontSize: 20}}> {this.props.cadastro_resultado_txt_erro}</Text>
                </View>
                </View>
            )
        } else{
            return(
                <View>
                    <Text style= {{fontSize: 20}}> Contato Realizado! </Text>
                </View>
            )
        }
    }
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                {this.renderAdicionarContato()}
            </View>

        );
    }
}
const mapStateToProps = state => (
    {
        adicona_contato_email: state.AppReducer.adicona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultadoo_inclusao: state.AppReducer.cadastro_resultadoo_inclusao

    }
)

export default connect(mapStateToProps, {modificaAdicionaContatoEmail, adicionaContato} )(AdicionarContato)