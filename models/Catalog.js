import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getProduct } from '../services/database/ProdutoDAO';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={require('../assets/ImagemGenerica.jpg')} style={styles.productImage}></Image>
      <Text style={styles.productName}>{item.nome}</Text>
      <Text style={styles.productDescription}>{item.categoria}</Text>
      <Text style={styles.productPrice}>${item.preco}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        }}
      >
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2} // Define 2 elementos por linha
      renderItem={renderProduct}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f4a261',
    borderRadius: 15,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 16, // Espaçamento horizontal opcional
  },
  productContainer: {
    flex: 1, // Cada item ocupa metade da largura
    margin: 8, // Espaçamento entre os elementos
    padding: 16,
    backgroundColor: '#FEF7FC',
    borderRadius: 8,
  },
  productName: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e09f3e'
  },
  productDescription: {
    fontSize: 15,
    color: 'lightgrey'
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e09f3e'
  },
  productImage: {
    width: '100%', // Defina a largura da imagem como 100%
    height: 200, // Altura da imagem
    resizeMode: 'cover', // Modo de redimensionamento da imagem
    borderRadius: 8, // Borda arredondada (opcional)
  }
});

export default Catalog;
