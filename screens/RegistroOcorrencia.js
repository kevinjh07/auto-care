import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

export default function RegistroOcorrencia() {
  const [hasPermission, setHasPermission] = useState(null);
  const [tipo, setTipo] = useState(Camera.Constants.Type.front);
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    requestPermission();
  }, []);

  async function requestPermission() {
    const { status } = await Camera.requestPermissionsAsync();

    if (status == 'granted') {
      setHasPermission(true);
    } else {
      setHasPermission(false);
    }
  }

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>INICIALIZANDO TELA ...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>É necessária a permissão de acesso a câmera</Text>
      </View>
    );
  }

  function reverterCamera() {
    if (tipo === Camera.Constants.Type.front) {
      setTipo(Camera.Constants.Type.back);
    } else {
      setTipo(Camera.Constants.Type.front);
    }
  }

  const tirarFoto = async () => {
    if (this.camera) {
      const opcoes = {
        quality: 0.1,
        base64: true,
      };

      const data = await this.camera.takePictureAsync(opcoes);
      console.log('Tamanho do Base64: ', data.base64.length);

      setImagens(imagens.concat('data:image/png;base64,' + data.base64));
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={tipo}
        ref={(ref) => {
          this.camera = ref;
        }}>
        <View style={styles.cameraView}>
          <TouchableOpacity onPress={() => reverterCamera()}>
            <Ionicons name="ios-reverse-camera" size={60} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={tirarFoto}>
            <Ionicons name="ios-camera" size={60} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.imagens}>
        {imagens.map((i) => (
          <Image source={{ uri: i }} style={styles.imagem} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  camera: {
    width: '100%',
    height: 450,
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  imagens: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imagem: {
    width: 90,
    height: 120,
    resizeMode: 'stretch',
  },
});
