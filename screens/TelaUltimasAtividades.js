import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function TelaUltimasAtividades() {
    return (
        <View style={styles.container}>
            <Text style={styles.textoAtividade}>Não há atividades recentes na aplicação</Text>
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
    textoAtividade: {
        fontSize: 18,
        color: "#888",
    },
});