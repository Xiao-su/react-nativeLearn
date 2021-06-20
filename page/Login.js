import React, { Component } from 'react'
import { Text, View, Image, StatusBar, StyleSheet } from 'react-native'
import {pxToDp} from '../untils/stylesKits';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import phoneValidUntil from '../untils/validator';
import {ACCOUNT_LOGIN} from '../untils/mockApi';
import request from '../untils/request';

const styles = StyleSheet.create({
  topImg:{
    width: "100%",
    height: pxToDp(240)
  },
  topContent:{
    padding: pxToDp(20)
  },
  textA:{
    fontSize: pxToDp(25),
    color: '#888',
    fontWeight:'bold'
  }
})


class Login extends Component {


  state = {
    phoneNumber: '',
    phoneValid: true,
  }

  phoneChangeHandle = (Text) => {
    this.setState({
      phoneNumber: Text
    })
  }

  phoneSubmitHandle = async() => {
    const { phoneNumber } = this.state;
    const _phoneValid = phoneValidUntil.validatePhone(phoneNumber);
    this.setState({
      phoneValid: _phoneValid
    });
    if(_phoneValid){
      const res = await request.post(ACCOUNT_LOGIN,{
        phone: phoneNumber
      });
      console.log('res:',res)
    }
  }

  render() {
    const { phoneNumber, phoneValid } = this.state;
    return (
      <View>
        <StatusBar
         translucent={true} 
         backgroundColor="transparent" />
        <Image style={styles.topImg}  source={require('../assest/images/loginTop.png')} />
        <View style={styles.topContent}>
          <View>
            <Text style={styles.textA}>手机号登录注册</Text>
          </View>
          <Input
            value={phoneNumber}
            placeholder='请输入手机号码'
            maxLength={11}
            keyboardType="phone-pad"
            onChangeText={this.phoneChangeHandle}
            errorMessage={phoneValid? null:"手机号码不正确"}
            onSubmitEditing={this.phoneSubmitHandle}
            leftIcon={{ type: 'font-awesome', name: 'phone', color: '#ccc', size: pxToDp(20) }}
          />
        </View>
      </View>
    )
  }
}

export default Login
