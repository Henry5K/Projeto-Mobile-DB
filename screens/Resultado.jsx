import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import { styles } from '../styles/resultado.jsx';


const db = SQLite.openDatabase('treinos.db');

const ResultadoScreen = () => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const fetchTotalsFromDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT SUM(calorias) AS totalCalories, SUM(tempo) AS totalTime FROM treinos;',
        [],
        (_, resultSet) => {
          const { totalCalories, totalTime } = resultSet.rows.item(0);
          setTotalCalories(totalCalories || 0);
          setTotalTime(totalTime || 0);
        },
        (_, error) => {
          console.log('Erro ao executar a query:', error);
        }
      );
    });
  };

  useEffect(() => {
    fetchTotalsFromDatabase();
  }, []);

  const handleUpdateData = () => {
    fetchTotalsFromDatabase();
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
    </View>
  );
};

export default ResultadoScreen;