import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PembelajaranScreen from './components/PembelajaranScreen';
import EvaluasiScreen from './components/EvaluasiScreen';
import DetailUnsur from './components/DetailUnsur';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pembelajaran" component={PembelajaranScreen} />
        <Stack.Screen name="Evaluasi" component={EvaluasiScreen} />
        <Stack.Screen name="DetailUnsur" component={DetailUnsur} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
