
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button, Alert, ScrollView, LogBox } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProdutoDAO from '../services/database/ProdutoDAO';
import Icon from 'react-native-vector-icons/Ionicons';
import Catalog from '../models/Catalog';

export default function ListarProdutos({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  const [filtro, setFiltro] = useState('todos')

  const [catalogKey, setCatalogKey] = useState(0);

  useEffect(() => {
    setCatalogKey(catalogKey + 1);
  }, [filtro]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home')
          }}>
          <Icon name="chevron-back-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Cart')
          }}>
          <Icon name="cart-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.nomeLoja}>
        <Text style={styles.nome}>CGS</Text>
      </View>
      <View style={styles.categoria}>
        <TouchableOpacity
          onPress={() => {
            setFiltro("todos")
          }}
        >
          <Text style={styles.txtcategoria}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFiltro("placaMae")
          }}
        >
          <Text style={styles.txtcategoria}>Placa mãe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setFiltro("processador")
          }}
        >
          <Text style={styles.txtcategoria}>Processador</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFiltro("gpu")
          }}
        >
          <Text style={styles.txtcategoria}>GPU</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFiltro("memoria")
          }}
        >
          <Text style={styles.txtcategoria}>Memória</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.catalogo} >
        <Catalog key={catalogKey} showBuyButton={false} filtro={filtro} />
      </View>
    </ScrollView>

  );

}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginRight: 10
  },

  nomeLoja: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  nome: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#e09f3e'
  },

  txtcategoria: {
    fontSize: 15,
    color: '#e09f3e',
    marginRight: 15,
    marginTop: 5

  },

  categoria: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  icon: {
    color: '#e09f3e'
  },
  catalogo: {
    marginTop: 20
  },

});
