import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { styles } from '../../styles/exercices.jsx';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('treinos.db');

// -----------------
//   LISTA TREINOS
// -----------------

const PernasTreinoScreen = () => {
  const [exerciseData, setExerciseData] = React.useState([
{
    day: 1,
    title: "Agachamento com barra",
    description: "Realize o agachamento com barra, mantendo a forma correta e o controle durante o movimento. Realize 4 sets de 8-10 reps.",
    calories: 120,
    time: 10
  },
  {
    day: 2,
    title: "Avanço com halteres",
    description: "Faça o avanço com halteres para fortalecer as pernas. Realize 3 sets de 12-15 reps.",
    calories: 90,
    time: 8
  },
  {
    day: 3,
    title: "Agachamento sumô",
    description: "Realize o agachamento sumô para trabalhar os músculos das pernas e glúteos. Realize 4 sets de 8-10 reps.",
    calories: 110,
    time: 12
  },
  {
    day: 4,
    title: "Cadeira extensora",
    description: "Faça a cadeira extensora para fortalecer os músculos da coxa. Realize 3 sets de 12-15 reps.",
    calories: 80,
    time: 10
  },
  {
    day: 5,
    title: "Levantamento terra",
    description: "Realize o levantamento terra para trabalhar os músculos das pernas e glúteos. Realize 4 sets de 8-10 reps.",
    calories: 130,
    time: 12
  },
  {
    day: 6,
    title: "Agachamento búlgaro",
    description: "Faça o agachamento búlgaro para fortalecer as pernas de forma unilateral. Realize 3 sets de 12-15 reps para cada perna.",
    calories: 95,
    time: 10
  },
  {
    day: 7,
    title: "Panturrilha no leg press",
    description: "Realize a panturrilha no leg press para fortalecer os músculos da panturrilha. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 8,
    title: "Agachamento frontal",
    description: "Faça o agachamento frontal para trabalhar os músculos das pernas e glúteos. Realize 4 sets de 8-10 reps.",
    calories: 115,
    time: 12
  },
  {
    day: 9,
    title: "Stiff",
    description: "Realize o stiff para fortalecer os músculos das pernas e glúteos. Realize 3 sets de 10-12 reps.",
    calories: 100,
    time: 8
  },
  {
    day: 10,
    title: "Cadeira flexora",
    description: "Faça a cadeira flexora para fortalecer os músculos da parte posterior das pernas. Realize 3 sets de 12-15 reps.",
    calories: 75,
    time: 10
  },
  {
    day: 11,
    title: "Agachamento unilateral",
    description: "Realize o agachamento unilateral para trabalhar as pernas de forma unilateral. Realize 4 sets de 8-10 reps para cada perna.",
    calories: 105,
    time: 12
  },
  {
    day: 12,
    title: "Afundo com barra",
    description: "Faça o afundo com barra para fortalecer as pernas. Realize 3 sets de 12-15 reps para cada perna.",
    calories: 90,
    time: 10
  },
  {
    day: 13,
    title: "Cadeira adutora",
    description: "Realize a cadeira adutora para fortalecer os músculos adutores das pernas. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 14,
    title: "Agachamento com salto",
    description: "Faça o agachamento com salto para desenvolver explosão nas pernas. Realize 3 sets de 8-10 reps.",
    calories: 120,
    time: 8
  },
  {
    day: 15,
    title: "Panturrilha em pé",
    description: "Realize a panturrilha em pé para fortalecer os músculos da panturrilha. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 16,
    title: "Agachamento hack",
    description: "Faça o agachamento hack para trabalhar os músculos das pernas e glúteos. Realize 4 sets de 8-10 reps.",
    calories: 110,
    time: 12
  },
  {
    day: 17,
    title: "Elevação de panturrilha sentado",
    description: "Realize a elevação de panturrilha sentado para fortalecer os músculos da panturrilha. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 18,
    title: "Agachamento com kettlebell",
    description: "Faça o agachamento com kettlebell para fortalecer as pernas. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 10
  },
  {
    day: 19,
    title: "Step-up",
    description: "Realize o step-up para fortalecer as pernas. Realize 3 sets de 12-15 reps para cada perna.",
    calories: 85,
    time: 8
  },
  {
    day: 20,
    title: "Agachamento com bola medicinal",
    description: "Faça o agachamento com bola medicinal para trabalhar os músculos das pernas e glúteos. Realize 4 sets de 8-10 reps.",
    calories: 110,
    time: 12
  },
  {
    day: 21,
    title: "Flexão plantar em pé",
    description: "Realize a flexão plantar em pé para fortalecer os músculos da panturrilha. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 22,
    title: "Agachamento sumô",
    description: "Faça o agachamento sumô para fortalecer as pernas e glúteos. Realize 4 sets de 8-10 reps.",
    calories: 100,
    time: 10
  },
  {
    day: 23,
    title: "Panturrilha no leg press",
    description: "Realize a panturrilha no leg press para fortalecer os músculos da panturrilha. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 24,
    title: "Avanço com halteres",
    description: "Faça o avanço com halteres para fortalecer as pernas. Realize 3 sets de 12-15 reps para cada perna.",
    calories: 90,
    time: 10
  },
  {
    day: 25,
    title: "Agachamento búlgaro",
    description: "Realize o agachamento búlgaro para trabalhar as pernas de forma unilateral. Realize 4 sets de 8-10 reps para cada perna.",
    calories: 105,
    time: 12
  },
  {
    day: 26,
    title: "Elevação de panturrilha no smith machine",
    description: "Faça a elevação de panturrilha no smith machine para fortalecer os músculos da panturrilha. Realize 3 sets de 12-15 reps.",
    calories: 70,
    time: 8
  },
  {
    day: 27,
    title: "Agachamento com salto e kettlebell",
    description: "Realize o agachamento com salto e kettlebell para desenvolver explosão nas pernas. Realize 3 sets de 8-10 reps.",
    calories: 120,
    time: 8
  },
  {
    day: 28,
    title: "Agachamento com banda de resistência",
    description: "Faça o agachamento utilizando uma banda de resistência para adicionar intensidade ao exercício. Realize 4 sets de 8-10 reps.",
    calories: 110,
    time: 12
  },
  {
    day: 29,
    title: "Panturrilha no leg press unilateral",
    description: "Realize a panturrilha no leg press unilateral para fortalecer os músculos da panturrilha de forma unilateral. Realize 3 sets de 12-15 reps para cada perna.",
    calories: 70,
    time: 8
  },
  {
    day: 30,
    title: "Agachamento isométrico",
    description: "Faça o agachamento isométrico para fortalecer as pernas. Mantenha a posição por 30-60 segundos em cada set, realizando 3 sets no total.",
    calories: 90,
    time: 10
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
      <Text style={styles.title}>Treino de Pernas</Text>
      <Text style={styles.description}>Exercicios preparados com o foco nas pernas.</Text>
      <FlatList
        data={exerciseData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text>Nenhum exercício encontrado.</Text>}
      />
    </ScrollView>
  );
};

export default PernasTreinoScreen;