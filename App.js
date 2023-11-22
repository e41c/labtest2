import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumListScreen from './src/AlbumListScreen';
import AlbumDetailsScreen from './src/AlbumDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AlbumList">
        <Stack.Screen name="AlbumList" component={AlbumListScreen} />
        <Stack.Screen name="AlbumDetails" component={AlbumDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
