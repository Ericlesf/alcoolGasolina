import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard, Modal } from 'react-native';
import Resultado from './src/Resultado';


export default function App() {
  const [alcool, setAlcool] = useState()
  const [gasolina, setGasolina] = useState()
  const [resultado, setResultado] = useState()
  const [visibleModal, setVisibleModal] = useState(false)

  function calcular() {
    Keyboard.dismiss()

    if (alcool === '' || gasolina === '') {
      alert('Digite valores válidos!')
    }
    else {
      setResultado(alcool / gasolina)
      setVisibleModal(true)
    }

  }


  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('./assets/logo.png')} />
      <Text style={styles.titulo}>Qual compensa mais?</Text>

      <View style={styles.inputContainer}>

        <Text style={styles.inputTitulo}>Álcool (Preço por litro)</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 3.79'
          value={alcool}
          onChangeText={setAlcool}
        />

        <Text style={styles.inputTitulo}>Gasolina (Preço por litro)</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 5.19'
          value={gasolina}
          onChangeText={setGasolina}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={calcular}
        >
          <Text style={styles.botaoTexto}>Calcular</Text>
        </TouchableOpacity>

      </View>

      <Modal
        animationType='slide'
        transparent={false}
        visible={visibleModal}

      >
        <Resultado
          resultado={resultado}
          alcool={alcool}
          gasolina={gasolina}
          voltar={() => { setVisibleModal(false) }}
        />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  logo: {
    marginTop: 50
  },
  titulo: {
    color: "#FFF",
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold'
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    marginTop: 30,
  },
  inputTitulo: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    width: "100%",
    backgroundColor: '#FFF',
    height: 55,
    fontSize: 18,
    marginTop: 10,
    borderRadius: 8,
    padding: 8,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#ff3030",
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold'
  }
});
