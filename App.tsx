import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'

import { 
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'

import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import { Home } from './src/screens/Home'
import { CarDetails } from './src/screens/CarDetails'
import { Schedule } from './src/screens/Schedule'
import { ScheduleDetails } from './src/screens/ScheduleDetails';

import theme from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  // mostra uma tela de Splash enquanto carrega as fontes
  if (!fontsLoaded) {
    return <AppLoading /> 
  }

  return (
    <ThemeProvider theme={theme}>            
      <ScheduleDetails />
    </ThemeProvider>
  );
}
