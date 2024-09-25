import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaMensagens() {
    return (
        <View style={styles.container}>
            <Text style={styles.textoMensagens}>Não há mensagens para serem lidas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    textoMensagens: {
        fontSize: 18,
        color: "#888",
    },
});