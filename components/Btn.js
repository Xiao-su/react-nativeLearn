import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject("RootStore")
@observer
class Index extends Component{

  componentWillUnmount(){
    console.log('退出了Btn页')
  }

  handleName = () =>{
    const { changeName } = this.props.RootStore;
    changeName(`time:${Date.now()}`)
  }

  render(){
    const { name } = this.props.RootStore;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={this.handleName}>{name}</Text>
        <Button
          title="goBack"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

export default Index;