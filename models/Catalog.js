import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

const products = [
  { id: '1', name: 'Produto 1', category: 'Placa mae', description: 'Placa mae', unityPrice:'120' },
  { id: '2', name: 'Produto 2', category: 'Processaor', description: 'Processaor', unityPrice:'120'  },
  { id: '3', name: 'Produto 3', category: 'GPU', description: 'GPU', unityPrice:'120'  },
  { id: '4', name: 'Produto 4', category: 'Memoria', description: 'Memoria', unityPrice:'120'  },
  { id: '5', name: 'Produto 1', category: 'Placa mae', description: 'Placa mae', unityPrice:'120' },
  { id: '6', name: 'Produto 2', category: 'Processaor', description: 'Processaor', unityPrice:'120'  }
  // Adicione mais produtos conforme necessário
];

const Catalog = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={require('../assets/ImagemGenerica.jpg')} style={styles.productImage}></Image>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>${item.unityPrice}</Text>
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
    marginTop:10,
    fontSize: 15, 
    fontWeight: 'bold',
    color: '#e09f3e'
  },
  productDescription:{
    fontSize: 15, 
    color: 'lightgrey'
  },
  productPrice:{
    fontSize: 15, 
    fontWeight: 'bold',
    color: '#e09f3e'
  },
  productImage:{
    width: '100%', // Defina a largura da imagem como 100%
    height: 200, // Altura da imagem
    resizeMode: 'cover', // Modo de redimensionamento da imagem
    borderRadius: 8, // Borda arredondada (opcional)
  }
});

export default Catalog;
