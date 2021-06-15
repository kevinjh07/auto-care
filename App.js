import React, { useEffect } from 'react';

import { Platform } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import ManutencaoScreen from './screens/ManutencaoScreen';
import SelecaoTipoVeiculoScreen from './screens/SelecaoTipoVeiculoScreen';
import SelecaoMarcaVeiculoScreen from './screens/SelecaoMarcaVeiculoScreen';
import SelecaoModeloVeiculoScreen from './screens/SelecaoModeloVeiculoScreen';
import ConfirmacaoDadosScreen from './screens/ConfirmacaoDadosScreen';
import CadastroManutencaoScreen from './screens/CadastroManutencaoScreen';
import SosScreen from './screens/SosScreen';
import AlarmeScreen from './screens/AlarmeScreen';
import RegistroOcorrencia from './screens/RegistroOcorrencia';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    registrarPushNotification();
  }, []);

  async function registrarPushNotification() {
    if (Constants.isDevice) {
      let { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

      if (status !== 'granted') {
        let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      }

      if (status !== 'granted') {
        alert(
          'É necessária a permissão de notificação para receber promoções dos nosso parceiros.'
        );
        return;
      }

      const expoToken = await Notifications.getExpoPushTokenAsync();
      const token = expoToken.data;
      console.log(token);

      if (Platform.OS === 'android') {
        console.log('Dispositivo Android');

        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="home">
        <Stack.Screen name="home" component={ManutencaoScreen} />
        <Stack.Screen
          name="selecaoTipoVeiculo"
          component={SelecaoTipoVeiculoScreen}
        />
        <Stack.Screen
          name="selecaoMarcaVeiculo"
          component={SelecaoMarcaVeiculoScreen}
        />
        <Stack.Screen
          name="selecaoModeloVeiculo"
          component={SelecaoModeloVeiculoScreen}
        />
        <Stack.Screen
          name="confirmacaoDados"
          component={ConfirmacaoDadosScreen}
        />
        <Stack.Screen
          name="cadastroManutencao"
          component={CadastroManutencaoScreen}
        />
        <Stack.Screen name="sos" component={SosScreen} />
        <Stack.Screen name="alarme" component={AlarmeScreen} />
        <Stack.Screen name="registro" component={RegistroOcorrencia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
