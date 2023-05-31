import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { styles } from '../../styles/exercices.jsx';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('treinos.db');

// -----------------
//   LISTA TREINOS
// -----------------

const CostasTreinoScreen = () => {
  const [exerciseData, setExerciseData] = React.useState([
  {
    day: 1,
    title: "Barra fixa pronada",
    description: "Realize a barra fixa pronada para fortalecer os músculos das costas. Realize 3 sets de 8-10 reps.",
    calories: 90,
    time: 10
  },
  {
    day: 2,
    title: "Remada com barra",
    description: "Faça a remada com barra para fortalecer os músculos das costas e do trapézio. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 3,
    title: "Puxada alta com polia",
    description: "Realize a puxada alta com polia para trabalhar os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 4,
    title: "Remada curvada",
    description: "Faça a remada curvada para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 5,
    title: "Puxada frontal com polia",
    description: "Realize a puxada frontal com polia para trabalhar os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 6,
    title: "Remada unilateral com halteres",
    description: "Faça a remada unilateral com halteres para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 10-12 reps.",
    calories: 90,
    time: 10
  },
  {
    day: 7,
    title: "Hiperextensão lombar",
    description: "Realize a hiperextensão lombar para fortalecer os músculos das costas e glúteos. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 8,
    title: "Puxada inversa com polia",
    description: "Faça a puxada inversa com polia para fortalecer os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 9,
    title: "Remada com halteres",
    description: "Realize a remada com halteres para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 10,
    title: "Puxada com pegada supinada",
    description: "Faça a puxada com pegada supinada para trabalhar os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 11,
    title: "Puxada unilateral com halteres",
    description: "Realize a puxada unilateral com halteres para fortalecer os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 12,
    title: "Remada na máquina",
    description: "Faça a remada na máquina para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 13,
    title: "Elevação lateral com halteres",
    description: "Realize a elevação lateral com halteres para trabalhar os músculos das costas e dos ombros. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 14,
    title: "Puxada alta com pegada fechada",
    description: "Faça a puxada alta com pegada fechada para fortalecer os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 15,
    title: "Remada cavalinho",
    description: "Realize a remada cavalinho para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 16,
    title: "Puxada com pegada neutra",
    description: "Faça a puxada com pegada neutra para trabalhar os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 17,
    title: "Remada curvada com barra",
    description: "Realize a remada curvada com barra para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 18,
    title: "Puxada unilateral com polia",
    description: "Faça a puxada unilateral com polia para trabalhar os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 19,
    title: "Remada baixa com barra",
    description: "Realize a remada baixa com barra para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 20,
    title: "Puxada na máquina",
    description: "Faça a puxada na máquina para fortalecer os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 21,
    title: "Superman",
    description: "Realize o exercício superman para fortalecer os músculos das costas e glúteos. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 22,
    title: "Puxada com corda",
    description: "Faça a puxada com corda para trabalhar os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 23,
    title: "Remada unilateral com cabo",
    description: "Realize a remada unilateral com cabo para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 10-12 reps.",
    calories: 90,
    time: 10
  },
  {
    day: 24,
    title: "Puxada com halteres",
    description: "Faça a puxada com halteres para fortalecer os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 25,
    title: "Remada na máquina com pegada aberta",
    description: "Realize a remada na máquina com pegada aberta para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 26,
    title: "Puxada com pegada supinada na máquina",
    description: "Faça a puxada com pegada supinada na máquina para trabalhar os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 27,
    title: "Puxada na polia baixa",
    description: "Realize a puxada na polia baixa para fortalecer os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 28,
    title: "Remada inclinada",
    description: "Faça a remada inclinada para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  },
  {
    day: 29,
    title: "Puxada no pulldown com pegada pronada",
    description: "Realize a puxada no pulldown com pegada pronada para trabalhar os músculos das costas e do bíceps. Realize 3 sets de 10-12 reps.",
    calories: 80,
    time: 8
  },
  {
    day: 30,
    title: "Remada com cabo",
    description: "Faça a remada com cabo para fortalecer os músculos das costas, trapézio e bíceps. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 12
  }
]);

  // -----------------
  //    AUXILIARES
  // -----------------

  const handleCheckExercise = (item) => {
    Alert.alert("Parabéns!", "Esse exercício foi concluído com sucesso!");

    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE treinos SET calorias = calorias + ?, tempo = tempo + ?;",
        [item.calories, item.time],
        (_, result) => {
          console.log("Dados atualizados com sucesso!");
        },
        (_, error) => {
          console.log("Erro ao atualizar dados:", error);
        }
      );
    });

    const updatedData = exerciseData.filter(
      (exercise) => exercise.day !== item.day
    );
    setExerciseData(updatedData);
  };

  const handleDismissExercise = (item) => {
    Alert.alert("Aviso!", "Treino dispensado temporariamente!");

    const updatedData = exerciseData.filter(
      (exercise) => exercise.day !== item.day
    );
    setExerciseData([...updatedData, item]);
  };

  // -----------------
  //  RENDER DE CARDS
  // -----------------

  const renderItem = ({ item }: { item: Exercise }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.dayContainer}>
          <Text style={styles.dayText}>EXC</Text>
          <Text style={styles.dayNumber}>
            {item.day.toString().padStart(2, "0")}
          </Text>
        </View>

        <View style={styles.divider} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => handleCheckExercise(item)}
          >
            <FontAwesome name="check" size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timesButton}
            onPress={() => handleDismissExercise(item)}
          >
            <FontAwesome name="times" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // -----------------
  //  RENDER DE TELA
  // -----------------

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Treino das Costas</Text>
      <Text style={styles.description}>Exercicios preparados com o foco nas costas.</Text>
      <FlatList
        data={exerciseData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text>Nenhum exercicio encontrado.</Text>}
      />
    </ScrollView>
  );
};

export default CostasTreinoScreen;