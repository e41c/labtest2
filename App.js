import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumListScreen from './src/AlbumListScreen';
import AlbumDetailsScreen from './src/AlbumDetailsScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="AlbumList">
        <Stack.Screen name="AlbumList" component={AlbumListScreen} />
        <Stack.Screen name="AlbumDetails" component={AlbumDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', 
  },
});

export default App;
