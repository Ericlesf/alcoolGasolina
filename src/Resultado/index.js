import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'


export default function Resultado(props) {
  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('../../assets/gas.png')}
      />

      <Text style={styles.titulo}>Compensa usar Gasolina</Text>
      <Text style={styles.tituloPrecos}>Com os seguintes preços:</Text>
      <Text style={styles.textoPrecos}>Álcool: R$3.79</Text>
      <Text style={styles.textoPrecos}>Gasolina: R$5.69</Text>

      <Button title='Voltar' onPress={props.voltar} />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center'
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
  tituloPrecos: {
    color: "#FFF",
    fontSize: 24,
    marginTop: 30,
    fontWeight: 'bold'
  },
  textoPrecos: {
    color: '#FFF',
    fontSize: 18
  }
})