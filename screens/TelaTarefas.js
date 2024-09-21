import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet, Button } from "react-native";
import tasks from "../data/dadosTarefas";

const obterDataFormatada = () => {
    const hoje = new Date();
    const diasSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
    ];
    const mesesAno = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const diaSemana = diasSemana[hoje.getDay()];
    const diaMes = hoje.getDate();
    const mes = mesesAno[hoje.getMonth()];

    return `${diaSemana}, ${diaMes} de ${mes}`;

};

export default function TelaTarefas() {
    const [tarefas, definirTarefas] = useState([]);
    const [novaTarefa, definirNovaTarefa] = useState("");
    const [modalVisivel, definirModalVisivel] = useState(false);

    useEffect(() => {
        definirTarefas(tasks);
    }, []);

    const adicionarTarefa = () => {
        const nova = {
            nome: novaTarefa,
            descricao: "Nova tarefa adicionada",
            status: false,
            data: obterDataFormatada(),
        };
        definirTarefas([...tarefas, nova]);
        definirNovaTarefa("");
        definirModalVisivel(false);
    };

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
            <Text style={styles.dataTexto}>{obterDataFormatada()}</Text>
            <Button title="Nova Tarefa" onPress={() => definirModalVisivel(true)} />
            {modalVisivel && (
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Nome da tarefa"
                        value={novaTarefa}
                        onChangeText={definirNovaTarefa}
                        style={styles.input}
                    />
                    <Button title="Adicionar" onPress={adicionarTarefa} />
                    <Button title="Cancelar" onPress={() => definirModalVisivel(false)} />
                </View>
            )}
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
    dataTexto: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
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
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 8,
        marginBottom: 10,
        width: "100%",
    },
});