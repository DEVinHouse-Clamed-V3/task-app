import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet, Button } from "react-native";
import tasks from "../data/dadosTarefas";
import CardTarefa from "../components/CardTarefa";
import ModalNovaTarefa from "../components/ModalNovaTarefa";

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
    const [tarefas, setTarefas] = useState([]);
    const [modalVisivel, setModalVisivel] = useState(false);

    useEffect(() => {
        setTarefas(tasks);
    }, []);

    const adicionarTarefa = (novaTarefa) => {
        const nova = {
            nome: novaTarefa.titulo,
            descricao: novaTarefa.descricao || "Sem descrição",
            status: false,
            data: novaTarefa.data || obterDataFormatada(),
        };
        setTarefas([...tarefas, nova]);
        setModalVisivel(false);
    };

    const renderTarefa = ({ item }) => (
        <CardTarefa
            titulo={item.nome}
            descricao={item.descricao}
            data={item.data}
            status={item.status}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.dataTexto}>{obterDataFormatada()}</Text>

            <Button title="Nova Tarefa" onPress={() => setModalVisivel(true)} />
            
            <ModalNovaTarefa
                visivel={modalVisivel}
                aoFechar={() => setModalVisivel(false)}
                aoSalvar={adicionarTarefa}
            />

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
});