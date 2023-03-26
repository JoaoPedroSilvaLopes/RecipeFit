 
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Router } from './router/router';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return <Router />
};

export default App;
