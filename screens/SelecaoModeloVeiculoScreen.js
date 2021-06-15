import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SimpleHeader from '../components/SimpleHeader';
import { getModelos } from '../utils/Api';

export default function SelecaoModeloVeiculoScreen({ navigation, route }) {
  const [modelos, setModelos] = useState([]);
  const { tipo, marca, setVeiculo } = route.params;

  const goBack = () => navigation.goBack();

  const Card = ({ texto, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.text}>{texto}</Text>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    async function carregarModelos() {
      const itens = await getModelos(tipo, marca);
      console.log('itens', itens);
      setModelos(itens);
    }

    carregarModelos();
  }, [tipo, marca]);

  return (
    <View>
      <SimpleHeader titulo="Selecione o modelo do veículo" onPress={goBack} />
      <View style={styles.body}>
        <FlatList
          data={modelos}
          renderItem={({ item }) => (
            <Card
              texto={item.nome}
              onPress={() => {
                navigation.navigate('confirmacaoDados', {
                  tipo,
                  marca,
                  modelo: item.nome,
                  setVeiculo,
                });
              }}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#d1d1d6',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    flexGrow: 1,
  },
  body: {
    padding: 16,
  },
});
