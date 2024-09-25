import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet, Button } from "react-native";
import tasks from "../data/dadosTarefas";
import CardTarefa from "../components/CardTarefa";
import ModalNovaTarefa from "../components/ModalNovaTarefa";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        const carregarTarefas = async () => {
            try {
                const tarefasSalvas = await AsyncStorage.getItem("tarefas");
                if (tarefasSalvas !== null) {
                    setTarefas(JSON.parse(tarefasSalvas));
                } else {
                    setTarefas(tasks);
                }
            } catch (error) {
                console.log(error);
            }
        };

        carregarTarefas();
    }, []);

    const salvarTarefas = async (tarefas) => {
        try {
            await AsyncStorage.setItem("tarefas", JSON.stringify(tarefas));
        } catch (error) {
            console.log(error);
        }
    };

    const adicionarTarefa = (novaTarefa) => {
        if (!novaTarefa.titulo) {
            alert("O título da tarefa é obrigatório");
            return;
        }
        const nova = {
            nome: novaTarefa.titulo,
            descricao: novaTarefa.descricao || "Sem descrição",
            status: false,
            data: novaTarefa.data || obterDataFormatada(),
        };
        const novasTarefas = [...tarefas, nova];
        setTarefas(novasTarefas);
        salvarTarefas(novasTarefas);
        setModalVisivel(false);
    };

    const filtrarTarefas = tarefas.filter(tarefa => 
        tarefa.nome && typeof tarefa.nome === "string" && tarefa.nome.toLowerCase().includes(filtro.toLowerCase())
    );

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

            <TextInput
                placeholder="Filtrar tarefas"
                value={filtro}
                onChangeText={setFiltro}
                style={styles.inputFiltro}
            />

            <Button title="Nova Tarefa" onPress={() => setModalVisivel(true)} />

            <ModalNovaTarefa
                visivel={modalVisivel}
                aoFechar={() => setModalVisivel(false)}
                aoSalvar={adicionarTarefa}
            />

            <FlatList
                data={filtrarTarefas}
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
    inputFiltro: {
        fontSize: 16,
        padding: 10,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
    },

});