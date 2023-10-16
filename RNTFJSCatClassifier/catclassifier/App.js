import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './CameraScreen';
import ImageScreen from './ImageScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CameraScreen">
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;