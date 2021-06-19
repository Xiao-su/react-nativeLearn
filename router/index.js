import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../page/HomeScreen';
import DetailsScreen from '../page/DetailsScreen';
import BtnScreen from '../components/Btn';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Btn: BtnScreen
  },
  {
    initialRouteName: 'Home',
  }
);


export default createAppContainer(AppNavigator);