import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import styles from '../Constants/Styles'
_logout = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
}
export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Chats'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{User.phone}</Text>
                <TouchableOpacity onPress={this._logout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}