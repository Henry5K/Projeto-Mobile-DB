import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { styles } from "../styles/resultado.jsx";

const ResultadoScreen = () => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const fetchTotalsFromServer = async () => {
    try {
      const response = await axios.get("http://IPAQUI:3001/item");
      const { totalCalories, totalTime } = response.data;
      setTotalCalories(totalCalories || 0);
      setTotalTime(totalTime || 0);
    } catch (error) {
      console.log("Erro ao obter dados do servidor:", error);
    }
  };

  useEffect(() => {
    fetchTotalsFromServer();
  }, []);

  const handleUpdateData = () => {
    fetchTotalsFromServer();
  };

  const handleResetTable = async () => {
    try {
      await axios.delete("http://IPAQUI:3001/item");
      console.log("Registros excluídos com sucesso!");
      fetchTotalsFromServer();
    } catch (error) {
      console.log("Erro ao excluir registros:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DESEMPENHO</Text>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="flame" size={60} color="#fff" />
          <Text style={styles.iconText}>{totalCalories}</Text>
          <Text style={styles.iconLabel}>Calorias</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="time" size={60} color="#fff" />
          <Text style={styles.iconText}>{totalTime}</Text>
          <Text style={styles.iconLabel}>Minutos</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdateData}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Atualizar Estatísticas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={handleResetTable}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Resetar Tabela</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultadoScreen;