import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { styles } from '../../styles/exercices.jsx';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('treinos.db');

// -----------------
//   LISTA TREINOS
// -----------------

const BracosTreinoScreen = () => {
  const [exerciseData, setExerciseData] = React.useState([
    {
      day: 1,
      title: "Rosca direta com barra",
      description: "Realize a rosca direta com barra para fortalecer os músculos dos braços. Realize 3 sets de 8-10 reps.",
      calories: 90,
      time: 10
    },
    {
      day: 2,
      title: "Rosca alternada com halteres",
      description: "Faça a rosca alternada com halteres para fortalecer os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 3,
      title: "Tríceps pulley",
      description: "Realize o tríceps pulley para trabalhar os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 4,
      title: "Rosca martelo",
      description: "Faça a rosca martelo para fortalecer os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 5,
      title: "Tríceps francês",
      description: "Realize o tríceps francês para trabalhar os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 6,
      title: "Rosca concentrada",
      description: "Faça a rosca concentrada para fortalecer os músculos dos braços. Realize 4 sets de 10-12 reps.",
      calories: 90,
      time: 10
    },
    {
      day: 7,
      title: "Tríceps testa",
      description: "Realize o tríceps testa para trabalhar os músculos dos braços. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8
    },
    {
      day: 8,
      title: "Rosca scott",
      description: "Faça a rosca scott para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 9,
      title: "Tríceps corda",
      description: "Realize o tríceps corda para trabalhar os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 10,
      title: "Rosca inversa",
      description: "Faça a rosca inversa para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 11,
      title: "Tríceps mergulho",
      description: "Realize o tríceps mergulho para trabalhar os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 12,
      title: "Rosca 21",
      description: "Faça a rosca 21 para fortalecer os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 13,
      title: "Tríceps coice",
      description: "Realize o tríceps coice para trabalhar os músculos dos braços. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8
    },
    {
      day: 14,
      title: "Rosca alternada no banco inclinado",
      description: "Faça a rosca alternada no banco inclinado para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 15,
      title: "Tríceps banco",
      description: "Realize o tríceps banco para trabalhar os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 16,
      title: "Rosca na barra W",
      description: "Faça a rosca na barra W para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 17,
      title: "Tríceps testa com halteres",
      description: "Realize o tríceps testa com halteres para trabalhar os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 18,
      title: "Rosca direta na máquina",
      description: "Faça a rosca direta na máquina para fortalecer os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 19,
      title: "Tríceps máquina",
      description: "Realize o tríceps máquina para trabalhar os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 20,
      title: "Rosca martelo com halteres",
      description: "Faça a rosca martelo com halteres para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 21,
      title: "Tríceps coice unilateral",
      description: "Realize o tríceps coice unilateral para trabalhar os músculos dos braços. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8
    },
    {
      day: 22,
      title: "Rosca concentrada com halteres",
      description: "Faça a rosca concentrada com halteres para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 23,
      title: "Tríceps corda",
      description: "Realize o tríceps corda para trabalhar os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 24,
      title: "Rosca inversa na barra",
      description: "Faça a rosca inversa na barra para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 25,
      title: "Tríceps banco com halteres",
      description: "Realize o tríceps banco com halteres para trabalhar os músculos dos braços. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12
    },
    {
      day: 26,
      title: "Rosca scott",
      description: "Faça a rosca scott para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 27,
      title: "Tríceps francês",
      description: "Realize o tríceps francês para trabalhar os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 28,
      title: "Rosca martelo com barra reta",
      description: "Faça a rosca martelo com barra reta para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 29,
      title: "Tríceps testa na máquina",
      description: "Realize o tríceps testa na máquina para trabalhar os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
    },
    {
      day: 30,
      title: "Rosca inversa com halteres",
      description: "Faça a rosca inversa com halteres para fortalecer os músculos dos braços. Realize 3 sets de 10-12 reps.",
      calories: 80,
      time: 8
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
      <Text style={styles.title}>Treino de Braços</Text>
      <Text style={styles.description}>Exercicios preparados com o foco nos braços.</Text>
      <FlatList
        data={exerciseData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text>Nenhum exercicio encontrado.</Text>}
      />
    </ScrollView>
  );
};

export default BracosTreinoScreen;