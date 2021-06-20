import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { pxToDp } from '../untils/stylesKits'

export class THButton extends Component {

  static defaultProps = {
    style:{},
    textStyle: {}
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{width: '100%', height:'100%', ...this.props.style,overflow:'hidden'}}>
        <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#9b63cd', '#e0708c']} style={styles.linearGradient}>
          <Text style={{...styles.buttonText, ...this.props.textStyle}}>
            {this.props.children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}
// Later on in your styles..
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxToDp(15),
    paddingRight: pxToDp(15),
    borderRadius: pxToDp(5),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: pxToDp(18),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default THButton;