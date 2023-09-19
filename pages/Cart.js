
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ProdutoDAO from '../services/database/ProdutoDAO';
import Icon from 'react-native-vector-icons/Ionicons';
import CartItem from '../models/CartItem';

export default function Cart({ navigation, carrinho }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log(carrinho)
            navigation.navigate('ListarProdutos')
          }}>
          <Icon name="chevron-back-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <CartItem {...carrinho}></CartItem>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  icon: {
    color: '#e09f3e'
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginRight: 10
  },

});
