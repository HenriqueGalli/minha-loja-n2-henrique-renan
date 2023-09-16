import React from 'react';
import { Button,TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.legenda}>Lojinha do GCS</Text>
            <View style={styles.botoes}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('CadastroProdutos')
                    }}
                >
                    <Text style={styles.buttonText}>Cadastrar Novo Produto</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('CadastroProdutos')
                    }}
                >
                    <Text style={styles.buttonText}>Listar Produtos</Text>
                </TouchableOpacity>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0F0',
        alignItems: 'center'
    },
    botao: {
        fontSize: 18,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        marginTop: 30,
        color: 'black',
    },
    botoes: {
        justifyContent: 'space-evenly',
        marginTop: 100
    },
    legenda: {
        fontSize: 32,
        color: 'black',
        marginTop: 32
    },
    button: {
        backgroundColor: 'red',
        margin:30,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 15,
      },
      buttonText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
      },
});
