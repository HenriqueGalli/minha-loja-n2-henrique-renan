
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ProdutoDAO from './services/database/ProdutoDAO';

export default function CadastroProdutos({ navigation }) {
  const [code, setCode] = useState()
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState()

  const saveProduct = async () => {
    const produto = { code, descricao, preco }
    
    try {
      if (code.length == 0 || descricao.length == 0 || preco.length == 0) {
        Alert.alert('Error', 'Preencha todos os campos')
        return;
      }
      const db = ProdutoDAO.getDBConnection();
      ProdutoDAO.saveProdutos(db, produto)

    } catch (error) {
      console.error('Erro salvando produto:', error)
      Alert.alert('Error', 'Erro salvando protudo')
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.legenda}>Cadastro de Produto</Text>
        <TextInput
          placeholder="Código"
          inputMode='numeric'
          value={code}
          onChangeText={setCode}
          style={styles.caixaTexto}
        />
        <TextInput
          placeholder="Descrição Produto"
          value={descricao}
          onChangeText={setDescricao}
          style={styles.caixaTexto}
        />
        <TextInput
          placeholder="Preço Unitário"
          value={preco}
          inputMode='decimal'
          onChangeText={setPreco}
          style={styles.caixaTexto}
        />
        
        <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        saveProduct
                    }}
                >
                    <Text style={styles.buttonText}>Cadastrar Novo Produto</Text>
                </TouchableOpacity>
    
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scrollContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
  },
  container: {
    flex: 0.75,
    backgroundColor: '#FFF0F0',
    borderRadius: 10,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',    
    padding: 16,
  },
  botao: {
    margin: 16
  },
  caixaTexto: {
    fontSize: 25,
    color: 'blue',
    width: 300,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 0,
    borderBottomWidth:1,
    paddingHorizontal: 20,
    height: 40
  },
  legenda: {
    fontSize: 20,
    color: 'black',
    flex:0.5
  }, 
  button: {
    backgroundColor: 'red',
    margin:30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
