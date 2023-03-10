/**
 * Electric Skateboard App for Purdue University Senior Design Project
 * https://github.com/anthony-pei/Electroboard
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RideScreen from './Ride';
import SettingsScreen from './Settings';
import StatisticsScreen from './Statistics';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ride" component={RideScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>  
  );
};

export default App;
