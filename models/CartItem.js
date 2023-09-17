import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CartItem = () => {
    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'Produto 1', price: 10.99, quantity: 2 },
        { id: '2', name: 'Produto 2', price: 19.99, quantity: 1 },
        // Adicione mais produtos ao carrinho conforme necessário
    ]);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <View style={styles.cartImg}>
                <Image source={require('../assets/ImagemGenerica.jpg')} style={styles.productImage}></Image>
            </View>
            <View style={styles.cartDescription}>
                <Text style={styles.nomeItem}>{item.name}</Text>
                <View style={styles.txtTotal}>
                    <View style={styles.quantidade}>
                        <Text style={styles.quantidadeTitulo}>Quantidade: </Text>
                        <Text style={styles.itemQuantidade}>{item.quantity}</Text>
                    </View>
                    <Text style={styles.precoItem}>${item.price.toFixed(2)}</Text>
                </View>
            </View>

        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seu Carrinho</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <Text style={styles.totalCompra}>Total: ${calculateTotalPrice()}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Finalizar Compra</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    quantidadeTitulo:{
        fontSize: 15,
        color: 'grey',
    },
    itemQuantidade:{
        fontSize: 15,
        color: '#e09f3e',
    },
    quantidade:{
        flexDirection: 'row'
    },
    nomeItem:{
        fontSize: 15,
        color: '#e09f3e',
    },
    txtTotal:{
        flexDirection: 'row',
    },
    precoItem:{
        fontSize: 15,
        color: '#e09f3e',
        marginLeft: 100
    },
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#e09f3e',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cartItem: {
        marginBottom: 16,
        padding: 8,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
    },
    checkoutButton: {
        backgroundColor: '#e09f3e',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
        alignItems: 'center',
    },
    checkoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    productImage: {
        width: 75,
        height: 75,
        borderRadius: 8,
    },
    cartDescription: {
        marginLeft: 30
    },
    totalCompra:{
        marginLeft:'auto',
        fontSize: 25,
        color: '#e09f3e',
    }
});

export default CartItem;
