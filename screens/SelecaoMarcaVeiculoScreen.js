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
import { getMarcas } from '../utils/Api';

export default function SelecionarMarcaScreen({ navigation, route }) {
  const [marcas, setMarcas] = useState([]);
  const { tipo, setVeiculo } = route.params;

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
    async function carregarMarcas() {
      const itens = await getMarcas(tipo);
      setMarcas(itens);
    }

    carregarMarcas();
  }, [tipo]);

  return (
    <View>
      <SimpleHeader titulo="Selecione a marca do veículo" onPress={goBack} />
      <View style={styles.body}>
        <FlatList
          data={marcas}
          renderItem={({ item }) => (
            <Card
              texto={item.nome}
              onPress={() => {
                navigation.navigate('selecaoModeloVeiculo', {
                  tipo,
                  marca: item.nome,
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
