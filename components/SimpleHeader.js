import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function SimpleHeader({ titulo, onPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="md-arrow-round-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0053A0',
    display: 'flex',
    flexDirection: 'row',
    flexBasis: 56,
    padding: 15,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'white',
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
