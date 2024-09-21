import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import tasks from "../data/dadosTarefas";

export default function TelaTarefas() {
    const [tarefas, definirTarefas] = useState([]);

    useEffect(() => {
        definirTarefas(tasks);
    }, []);

    const renderTarefa = ({ item }) => (
        <View style={styles.tarefaContainer}>
            <Text style={styles.tarefaNome}>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.data}</Text>
            <Text>{item.status ? "Concluída" : "Pendente"}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={tarefas}
                renderItem={renderTarefa}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        padding: 20,
    },
    tarefaContainer: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
    },
    tarefaNome: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5,
    },
});