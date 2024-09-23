import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardTarefa({titulo, descricao, data, status}) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text>{descricao}</Text>
      <Text>{data}</Text>
      <Text>{status ? "Concluída" : "Pendente"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadorColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    });