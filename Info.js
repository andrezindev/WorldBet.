import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Info = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Noticias</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>
          <Feather   /> 
Neymar se compara a Zico e aposta em Vini Jr. como protagonista da seleção
Em entrevista, jogador diz que sonha com uma Copa do Mundo, mas sabe que nem sempre acontece

        </Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>
          <Feather  /> Diniz estreia na seleção após mudanças forçadas na convocação

Investigações sobre Paquetá e Antony mudaram planos do treinador, que espera começar com vitória sobre a Bolívia
        </Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>
          <Feather  /> Fifa suspende cartola espanhol por beijo em jogadora campeã do mundo
Dirigente ficará afastado por pelo menos 90 dias; federação anuncia 'ações legais' contra Hermoso e comissão técnica pede demissão

        </Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>
          <Feather  /> Neymar diz que não está 100% para estreia do Brasil nas Eliminatórias
Atacante não joga desde 3 de agosto, mas afirma estar disponível para entrar em campo contra a Bolívia
        </Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>
          <Feather name="alert-octagon" style={styles.infoIcon} /> - Via
          obstruída
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    height: 100,
    backgroundColor: "#7289DA",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  infoIcon: {
    fontSize: 22,
    marginRight: 8,
    color: "#7289DA", // Cor dos ícones
  },
  infoText: {
    fontSize: 22,
  },
  backButton: {
    backgroundColor: "#7289DA",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Info;
