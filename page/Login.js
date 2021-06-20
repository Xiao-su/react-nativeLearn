import React, { Component } from 'react'
import { Text, View, Image, StatusBar, StyleSheet } from 'react-native'
import {pxToDp} from '../untils/stylesKits';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import phoneValidUntil from '../untils/validator';
import {ACCOUNT_LOGIN} from '../untils/mockApi';
import request from '../untils/request';
import THButton from '../components/THButton';

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
    showLogin: true,
  }

  phoneChangeHandle = (Text) => {
    this.setState({
      phoneNumber: Text
    })
  }

  commonValidNumber = () =>{
    const { phoneNumber } = this.state;
    const _phoneValid = phoneValidUntil.validatePhone(phoneNumber);
    this.setState({
      phoneValid: _phoneValid
    });
    return _phoneValid;
  }

  phoneSubmitHandle = () => {
    this.commonValidNumber()
  }

  getValidHandle = async() =>{
    const { phoneNumber } = this.state;
    const result = this.commonValidNumber();
    if(result){
        const res = await request.post(ACCOUNT_LOGIN,{
          phone: phoneNumber
        });
        if(res && res.code==='10000'){
          this.setState({
            showLogin: false
          });
        }else{
          this.setState({
            showLogin: true
          });
        }
    }
  }

  render() {
    const { phoneNumber, phoneValid, showLogin } = this.state;
    return (
      <View>
        <StatusBar
         translucent={true} 
         backgroundColor="transparent" />
        <Image style={styles.topImg}  source={require('../assest/images/loginTop.png')} />
        <View style={styles.topContent}>
          {
            showLogin ? 
            (<View>
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
              <View style={{width: '85%',height:pxToDp(40), alignSelf:'center'}}>
                <THButton onPress={this.getValidHandle} style={{borderRadius: pxToDp(40)}}>获取验证码</THButton>
              </View>
            </View>)
            : 
            (
              <View>
                <Text style={styles.textA}>填写验证码</Text>
              </View>
            )
          }
        </View>

      </View>
    )
  }
}

export default Login
