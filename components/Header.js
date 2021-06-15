import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header({ titulo, onPress }) {
  return (
    <>
      <View style={styles.header1}>
        <Image source={require('../assets/newton.png')} />
        <Text style={[styles.titulo, { marginLeft: -65 }]}>NEWTON PAIVA</Text>
      </View>
      <View style={styles.header2}>
        <Text style={styles.titulo}>{titulo}</Text>
        <TouchableOpacity onPress={onPress}>
          <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header1: {
    backgroundColor: '#043d5d',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  header2: {
    backgroundColor: '#0053a0',
    display: 'flex',
    flexDirection: 'row',
    flexBasis: 56,
    padding: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  titulo: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'white',
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
