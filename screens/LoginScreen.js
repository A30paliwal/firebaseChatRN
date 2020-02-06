import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import User from '../User';
import styles from '../Constants/Styles'
import { NavigationEvents } from 'react-navigation';
class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    phone: '',
    name: '',
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }
  componentDidMount() {
    AsyncStorage.getItem('userPhone').then(val => {
      if (val) {
        this.setState({ phone: val })
      }
    })
  }
  submitForm = async () => {
    if (this.state.phone.length < 10) {
      Alert.alert('Error', 'Wrong phone number');
    } else if (this.state.name.length < 3) {
      Alert.alert('Error', 'Wrong name')
    } else {
      await AsyncStorage.setItem('userPhone', this.state.phone);
      User.phone = this.state.phone;
      this.props.navigation.navigate('App')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          keyboardType='number-pad'
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}

        />
        <TextInput
          style={styles.input}
          placeholder='Name'
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text style={styles.btnText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



export default LoginScreen;
