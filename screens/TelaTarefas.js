import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function TelaTarefas() {
    const [tarefas, definirTarefas] = useState([]);
    const [novaTarefa, definirNovaTarefa] = useState("");

    const adicionarTarefa = () => {
        definirTarefas([...tarefas, novaTarefa]);
        definirNovaTarefa("");
    };

    return (
        <View style={styles.container}>
            <Text>Tarefas</Text>
            <TextInput
                placeholder="Digite uma tarefa"
                value={novaTarefa}
                onChangeText={definirNovaTarefa}
                style={styles.input}
            />
            <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
            {tarefas.map((tarefa, index) => (
                <Text key={index}>{tarefa}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        width: "80%",
    },
});