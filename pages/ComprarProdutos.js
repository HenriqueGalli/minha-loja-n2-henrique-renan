
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button, Alert, ScrollView, LogBox } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProdutoDAO from '../services/database/ProdutoDAO';
import Icon from 'react-native-vector-icons/Ionicons';
import Catalog from '../models/Catalog';

export default function ComprarProdutos({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
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
        <Text style={styles.txtcategoria}>Todos</Text>
        <Text style={styles.txtcategoria}>Placa mãe</Text>
        <Text style={styles.txtcategoria}>Processador</Text>
        <Text style={styles.txtcategoria}>GPU</Text>
        <Text style={styles.txtcategoria}>Memória</Text>
      </View>
        <View style={styles.catalogo} >
          <Catalog showBuyButton={true} />
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
    marginRight: 'auto',
    marginLeft: 'auto',
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
