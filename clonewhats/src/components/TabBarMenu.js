import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight} from 'react-native';
import { TabBar } from 'react-native-tab-view';
import {Actions} from 'react-native-router-flux';
import { habilitaInclusaoContato } from '../actions/AppActions';
import {connect} from 'react-redux';
import firebase from 'firebase';

const TabBarMenu = props => (
    <View style={{ backgroundColor: '#11SE54'}} >
        
        <StatusBar backgroundColor= '#114044' />

    <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ height: 50, justifyContent: 'center' }}>
        <Text style= {{fontSize: 20, marginLeft: 20}} >WhatsApp Clone</Text>
        </View>

        <View style= {{flexDirection: 'row'}}>
            <View style= {{width: 50, justifyContent: 'center'}}>
                <TouchableHighlight onPress= {() => { Actions.adicionarContato(); props.habilitaInclusaoContato() }} underlayColor= "#fff">
                <Image source={require('../imgs/adicionar-contato.png')} />
                </TouchableHighlight>
            </View>

            <View style= {{justifyContent: 'center'}}>
                <TouchableHighlight onPress ={() => firebase.auth().signOut().then(() => Actions.formLogin() )}>
                <Text style= {{fontSize: 20, color: '#fff'}}> Sair </Text>
                </TouchableHighlight>
            </View>

        </View>
    </View>

        <TabBar {...props} />
    </View>
);

export default connect(null, {habilitaInclusaoContato} )(TabBarMenu)