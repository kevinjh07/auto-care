import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import CardItem from '../components/CardItem';
import FloatButton from '../components/FloatButton';

const itens = [
  { tipo: 'ÓLEO', data: '10/10/2020', kmAtual: 66500, kmProximo: 68500 },
  { tipo: 'PNEU D.', data: '05/08/2020', kmAtual: 55400, kmProximo: 75400 },
  { tipo: 'PNEU T.', data: '13/11/2020', kmAtual: 39000, kmProximo: 59000 },
  { tipo: 'BATERIA', data: '12/12/2020', kmAtual: 93000, kmProximo: 95500 },
];

export default function ManutencaoScreen({ navigation, route }) {
  const [veiculo, setVeiculo] = useState({
    tipo: 'Moto',
    marca: 'Yamaha',
    modelo: 'XTZ 250 Ténéré',
  });

  const irParaSelecionarTipoVeiculo = () => {
    navigation.navigate('selecaoTipoVeiculo', { setVeiculo: setVeiculo });
  };

  return (
    <View style={styles.container}>
      <Header
        titulo={`${veiculo.tipo} ${veiculo.marca} ${veiculo.modelo}`}
        onPress={irParaSelecionarTipoVeiculo}
      />
      <FlatList
        data={itens}
        renderItem={({ item }) => (
          <CardItem
            tipo={item.tipo}
            data={item.data}
            kmAtual={item.kmAtual}
            kmProximo={item.kmProximo}
          />
        )}></FlatList>
      <FloatButton
        onPress={() => navigation.navigate('registro')}
        bottom={280}
        icon={<MaterialIcons name="camera-alt" size={24} color="white" />}
      />
      <FloatButton
        onPress={() => navigation.navigate('alarme')}
        bottom={190}
        icon={<MaterialIcons name="access-alarm" size={24} color="white" />}
      />
      <FloatButton
        onPress={() => navigation.navigate('sos')}
        bottom={100}
        icon={<FontAwesome5 name="hands-helping" size={24} color="white" />}
      />
      <FloatButton onPress={() => navigation.navigate('cadastroManutencao')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});
