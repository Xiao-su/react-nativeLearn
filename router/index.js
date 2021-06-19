import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../page/HomeScreen';
import DetailsScreen from '../page/DetailsScreen';
import BtnScreen from '../components/Btn';
import LoginScreen from '../page/Login'

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Details: DetailsScreen,
    Btn: BtnScreen
  },
  {
    initialRouteName: 'Login',
    headerMode:'none'
  }
);


export default createAppContainer(AppNavigator);