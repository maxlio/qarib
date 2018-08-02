import {
  createStackNavigator,
  withNavigation,
} from 'react-navigation';

import LoginScreen from './src/Components/Login/Login';
import StatusScreen from './src/Components/Status/Status';
const App = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Status: { screen: StatusScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

export default App;
