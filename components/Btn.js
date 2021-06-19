import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject("RootStore")
@observer
class Index extends Component{

  handleName = () =>{
    const { changeName } = this.props.RootStore;
    changeName('改变了')
  }

  render(){
    console.log('this', this)
    const { name } = this.props.RootStore;
    return (
      <View>
        <Text onPress={this.handleName}>{name}</Text>
      </View>
    )
  }
}

export default Index;