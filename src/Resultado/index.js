import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Resultado(props) {
  const [titulo, setTitulo] = useState('')

  useEffect(() => {
    props.resultado < 0.7 ? setTitulo('Compensa usar Álcool') : setTitulo('Compensa usar Gasolina')
  })

  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('../../assets/gas.png')}
      />

      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.tituloPrecos}>Com os seguintes preços:</Text>
      <Text style={styles.textoPrecos}>Álcool: R${props.alcool}</Text>
      <Text style={styles.textoPrecos}>Gasolina: R${props.gasolina}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={props.voltar}
      >
        <Text style={styles.textoBotao}>Calcular novamente</Text>
      </TouchableOpacity>
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
    color: "#2eeb59",
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
    fontSize: 18,
    marginTop: 10
  },
  botao: {
    backgroundColor: '#121212',
    width: '80%',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#ff3030'
  },
  textoBotao: {
    color: '#ff3030',
    fontSize: 22
  }
})