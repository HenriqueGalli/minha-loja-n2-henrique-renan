import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createTable, addProduct,  } from '../services/database/ProdutoDAO';

import { Picker } from '@react-native-picker/picker';
import { getCategoria } from '../services/database/CategoriaDAO';

export default function CadastroProdutos({ navigation }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    loadCategorias();
  }, []);

  const loadCategorias = () => {
    getCategoria()
      .then((result) => {
        // Armazena as categorias no estado
        setCategorias(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const saveProduct = async () => {
    const produto = { nome, preco, categoria };
    console.log(produto)
    try {
      if (nome.length === 0 || categoria.length === 0) {
        Alert.alert('Error', 'Preencha todos os campos');
        return;
      }

      await createTable();
      addProduct(produto);
      limparCampos();
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso');
    } catch (error) {
      console.error('Erro salvando produto:', error);
      Alert.alert('Error', 'Erro salvando produto');
    }
  };

  async function limparCampos() {
    setNome('');
    setPreco(0);
    setCategoria('');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity
        style={styles.buttonVoltar}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.legenda}>Cadastro de Produto</Text>
        <TextInput
          placeholder="Nome do Produto"
          value={nome}
          onChangeText={setNome}
          style={styles.caixaTexto}
        />
        <TextInput placeholder="Preço Unitário" value={preco + ''} inputMode='decimal' onChangeText={setPreco} style={styles.caixaTexto} />

        <View>
          <Text>Selecione uma Categoria:</Text>
          <Picker
            style={styles.picker}
            selectedValue={categoria}
            onValueChange={(itemValue) => setCategoria(itemValue)}>
            <Picker.Item label="Categoria" value="" />
            {categorias.map((cat) => (
              <Picker.Item label={cat.nome1} value={cat.nome1} key={cat.nome1} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            saveProduct();
          }}>
          <Text style={styles.buttonText}>Cadastrar Novo Produto</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  picker: {
    width: 180
  },

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
    width: 300,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    height: 40
  },
  legenda: {
    fontSize: 20,
    color: 'black',
    flex: 0.5
  },
  button: {
    backgroundColor: '#f4a261',
    margin: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonVoltar: {
    backgroundColor: '#f4a261',
    margin: 30,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingVertical: 10,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
