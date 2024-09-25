import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, Button, Modal } from "react-native";



export default function ModalNovaTarefa({ visivel, aoFechar, aoSalvar }) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");

    const limparCampos = () => {
        setTitulo("");
        setDescricao("");
        setData("");
    };

    const salvarTarefa = () => {
        aoSalvar({
            titulo,
            descricao,
            data,
        });
        limparCampos();
    };

    return (
        <Modal visible={visivel} animationType="slide" onRequestClose={aoFechar}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Nova Tarefa</Text>
                <TextInput
                    placeholder="Título"
                    value={titulo}
                    onChangeText={setTitulo}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Data"
                    value={data}
                    onChangeText={setData}
                    style={styles.input}
                />
                <View style={styles.botoesContainer}>
                    <Button title="Salvar" onPress={salvarTarefa} />
                    <Button title="Cancelar" onPress={aoFechar} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    botoesContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
    },
});