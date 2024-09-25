import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaTarefas from './screens/TelaTarefas';
import TelaConfiguracoes from './screens/TelaConfiguracoes';
import TelaUltimasAtividades from './screens/TelaUltimasAtividades';
import TelaMensagens from './screens/TelaMensagens';
import Icon from 'react-native-vector-icons/MaterialIcons';


const abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <abas.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Mensagens') {
              iconName = 'message';
            } else if (route.name === 'Tarefas de hoje') {
              iconName = 'today';
            } else if (route.name === 'Últimas Atividades') {
              iconName = 'history';
            } else if (route.name === 'Configurações') {
              iconName = 'settings';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <abas.Screen name="Mensagens" component={TelaMensagens} />
        <abas.Screen name="Tarefas de hoje" component={TelaTarefas} />
        <abas.Screen name="Últimas Atividades" component={TelaUltimasAtividades} />
        <abas.Screen name="Configurações" component={TelaConfiguracoes} />
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
