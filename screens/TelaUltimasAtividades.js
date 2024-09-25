import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function TelaUltimasAtividades() {
    const [atividades, setAtividades] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            const carregarAtividades = async () => {
                try {
                    const atividadesSalvas = await AsyncStorage.getItem("atividades");
                    if (atividadesSalvas !== null) {
                        setAtividades(JSON.parse(atividadesSalvas));
                    }
                } catch (error) {
                    console.log(error);
                }
            };

            carregarAtividades();
        }, [])
    );

    const renderAtividades = ({ item }) => (
        <View style={styles.atividadeContainer}>
            <Text style={styles.atividadeTexto}>{item.nome}</Text>
            <Text style={styles.atividadeDescricao}>{item.descricao}</Text>
            <Text style={styles.atividadeData}>{item.data}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {atividades.length === 0 ? (
                <Text style={styles.textoSemAtividade}>Não há atividades recentes na aplicação</Text>
            ) : (
                <FlatList
                    data={atividades}
                    renderItem={renderAtividades}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
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
    textoSemAtividade: {
        fontSize: 18,
        color: "#888",
    },
    atividadeContainer: {
        padding: 10,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        width: "100%",
    },
    atividadeTexto: {
        fontSize: 16,
        fontWeight: "bold",
    },
    atividadeData: {
        fontSize: 14,
        color: "#888",
    },
    atividadeDescricao: {
        fontSize: 14,
        color: "#444",
    },
});
