import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
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
          placeholder='Ex: 3.79'/>

        <Text style={styles.inputTitulo}>Gasolina (Preço por litro)</Text>
        <TextInput 
          style={styles.input}
          placeholder='Ex: 5.19'/>

      </View>

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
    fontSize: 28,
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
    fontSize: 16,
    marginTop: 10,
    borderRadius: 8,
    padding: 8,
    marginBottom: 20
  }
});
