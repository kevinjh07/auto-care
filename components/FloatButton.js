import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FloatButton({
  onPress,
  bottom = 15,
  icon = <MaterialIcons name="add" size={35} color="white" />,
}) {
  return (
    <TouchableHighlight
      style={[styles.floatButton, { bottom }]}
      onPress={onPress}
      underlayColor="#f18d3a">
      {icon}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  floatButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    position: 'absolute',
    right: 15,
    backgroundColor: '#f18d3a',
    borderRadius: 100,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 3,
  },
});
