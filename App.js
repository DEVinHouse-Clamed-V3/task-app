import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaTarefas from './screens/TelaTarefas';
import TelaConfiguracoes from './screens/TelaConfiguracoes';
import TelaUltimasAtividades from './screens/TelaUltimasAtividades';
import TelaMensagens from './screens/TelaMensagens';


const abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <abas.Navigator>
        <abas.Screen name="Tarefas" component={TelaTarefas} />
        <abas.Screen name="Configurações" component={TelaConfiguracoes} />
        <abas.Screen name="Atividades" component={TelaUltimasAtividades} />
        <abas.Screen name="Mensagens" component={TelaMensagens} />
      </abas.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
