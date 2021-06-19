import React, { Component } from 'react'
import { Text, View, Image, StatusBar, StyleSheet } from 'react-native'
import {pxToDp} from '../untils/stylesKits'

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
  render() {
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
        </View>
      </View>
    )
  }
}

export default Login
