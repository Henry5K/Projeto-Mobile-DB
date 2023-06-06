import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Alert } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { styles } from "../../styles/exercices.jsx";
import axios from "axios";

// -----------------
//   LISTA TREINOS
// -----------------

const PeitosTreinoScreen = () => {
  const [exerciseData, setExerciseData] = React.useState([
    {
      day: 1,
      title: "Supino reto",
      description:
        "Faça o supino reto com barra, mantendo a forma correta e controle durante o movimento. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },

    {
      day: 2,
      title: "Flexão de braço",
      description:
        "Faça flexões de braço com as mãos na largura dos ombros para fortalecer o peitoral. Realize 3 sets de 12-15 reps.",
      calories: 150,
      time: 5,
    },

    {
      day: 3,
      title: "Supino inclinado",
      description:
        "Realize o supino inclinado com halteres, mantendo a postura adequada e o controle do movimento. Realize 4 sets de 8-10 reps.",
      calories: 93,
      time: 15,
    },

    {
      day: 4,
      title: "Crucifixo com cabos",
      description:
        "Faça o crucifixo com cabos para trabalhar os músculos peitorais de forma isolada. Realize 3 sets de 12-15 reps.",
      calories: 92,
      time: 12,
    },

    {
      day: 5,
      title: "Supino declinado",
      description:
        "Realize o supino declinado para focar no músculo peitoral inferior. Realize 4 sets de 8-10 reps.",
      calories: 56,
      time: 16,
    },

    {
      day: 6,
      title: "Crossover",
      description:
        "Faça o exercício crossover para trabalhar os músculos peitorais de forma isolada. Realize 3 sets de 12-15 reps.",
      calories: 23,
      time: 7,
    },

    {
      day: 7,
      title: "Supino com halteres",
      description:
        "Faça o supino com halteres, alternando os braços, para promover equilíbrio e estabilidade. Realize 4 sets de 8-10 reps.",
      calories: 29,
      time: 2,
    },

    {
      day: 8,
      title: "Flexão declinada",
      description:
        "Realize flexões declinadas para intensificar o treino do peitoral inferior. Realize 3 sets de 12-15 reps.",
      calories: 283,
      time: 9,
    },

    {
      day: 9,
      title: "Supino inclinado com halteres",
      description:
        "Faça o supino inclinado com halteres, mantendo a postura correta e o controle durante o movimento. Realize 4 sets de 8-10 reps.",
      calories: 24,
      time: 4,
    },

    {
      day: 10,
      title: "Pullover",
      description:
        "Realize o exercício pullover para trabalhar os músculos peitorais e ombros. Realize 3 sets de 12-15 reps.",
      calories: 100,
      time: 12,
    },

    {
      day: 11,
      title: "Supino declinado com halteres",
      description:
        "Faça o supino declinado com halteres para fortalecer o peitoral inferior. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 14,
    },
    {
      day: 12,
      title: "Flexão diamante",
      description:
        "Realize flexões diamante para trabalhar o peitoral de forma intensa. Realize 3 sets de 12-15 reps.",
      calories: 100,
      time: 13,
    },

    {
      day: 13,
      title: "Supino inclinado com pegada neutra",
      description:
        "Faça o supino inclinado com pegada neutra para focar no peitoral superior. Realize 4 sets de 8-10 reps.",
      calories: 98,
      time: 9,
    },

    {
      day: 14,
      title: "Pullover com halteres",
      description:
        "Realize o exercício pullover com halteres para trabalhar o peitoral e os músculos das costas. Realize 3 sets de 12-15 reps.",
      calories: 87,
      time: 11,
    },

    {
      day: 15,
      title: "Supino com pegada ampla",
      description:
        "Faça o supino com pegada ampla para trabalhar os músculos peitorais. Realize 4 sets de 8-10 reps.",
      calories: 105,
      time: 10,
    },

    {
      day: 16,
      title: "Flexão explosiva",
      description:
        "Realize flexões explosivas para aumentar a força e explosão do peitoral. Realize 3 sets de 8-10 reps.",
      calories: 120,
      time: 8,
    },

    {
      day: 17,
      title: "Supino declinado com barra",
      description:
        "Faça o supino declinado com barra para fortalecer o peitoral inferior. Realize 4 sets de 8-10 reps.",
      calories: 95,
      time: 12,
    },

    {
      day: 18,
      title: "Flyes com halteres",
      description:
        "Realize flyes com halteres para alongar e fortalecer os músculos peitorais. Realize 3 sets de 12-15 reps.",
      calories: 80,
      time: 10,
    },

    {
      day: 19,
      title: "Supino inclinado com barra",
      description:
        "Faça o supino inclinado com barra para trabalhar o peitoral superior. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 12,
    },

    {
      day: 20,
      title: "Flexão com apoio nos punhos",
      description:
        "Realize flexões com apoio nos punhos para fortalecer o peitoral e os antebraços. Realize 3 sets de 12-15 reps.",
      calories: 85,
      time: 8,
    },

    {
      day: 21,
      title: "Supino declinado com pegada neutra",
      description:
        "Faça o supino declinado com pegada neutra para trabalhar o peitoral inferior de forma diferente. Realize 4 sets de 8-10 reps.",
      calories: 90,
      time: 10,
    },

    {
      day: 22,
      title: "Crucifixo inclinado",
      description:
        "Realize o crucifixo inclinado para trabalhar os músculos peitorais de forma isolada. Realize 3 sets de 12-15 reps.",
      calories: 75,
      time: 10,
    },

    {
      day: 23,
      title: "Supino com elásticos",
      description:
        "Faça o supino utilizando elásticos para adicionar resistência ao movimento. Realize 4 sets de 8-10 reps.",
      calories: 110,
      time: 15,
    },

    {
      day: 24,
      title: "Flexão com apoio nos dedos",
      description:
        "Realize flexões com apoio nos dedos para fortalecer o peitoral e os antebraços. Realize 3 sets de 10-12 reps.",
      calories: 95,
      time: 8,
    },

    {
      day: 25,
      title: "Supino inclinado com pegada fechada",
      description:
        "Faça o supino inclinado com pegada fechada para focar no tríceps e peitoral. Realize 4 sets de 8-10 reps.",
      calories: 105,
      time: 12,
    },

    {
      day: 26,
      title: "Dips no banco",
      description:
        "Realize dips no banco para fortalecer o tríceps e peitoral. Realize 3 sets de 10-12 reps.",
      calories: 90,
      time: 10,
    },

    {
      day: 27,
      title: "Flexão com apoio nos cotovelos",
      description:
        "Faça flexões com apoio nos cotovelos para trabalhar o peitoral e os tríceps. Realize 3 sets de 12-15 reps.",
      calories: 80,
      time: 8,
    },

    {
      day: 28,
      title: "Supino declinado com pegada fechada",
      description:
        "Realize o supino declinado com pegada fechada para focar no tríceps e peitoral inferior. Realize 4 sets de 8-10 reps.",
      calories: 95,
      time: 12,
    },

    {
      day: 29,
      title: "Push-ups explosivas",
      description:
        "Faça push-ups explosivas para desenvolver força e explosão no peitoral. Realize 3 sets de 8-10 reps.",
      calories: 120,
      time: 8,
    },

    {
      day: 30,
      title: "Supino inclinado com halteres e rotação",
      description:
        "Realize o supino inclinado com halteres e faça uma rotação externa no final do movimento para trabalhar o peitoral superior. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 15,
    },
  ]);

  // -----------------
  //    AUXILIARES
  // -----------------

  const handleCheckExercise = (item) => {
    Alert.alert("Parabéns!", "Esse exercício foi concluído com sucesso!");

    const data = {
      calories: item.calories,
      time: item.time,
    };

    axios.post("http://IPAQUI:3001/item", data)
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.error(error);
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

  const renderItem = ({ item }) => {
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
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>Treino de Peito</Text>
      <Text style={styles.description}>
        Exercicios preparados com o foco nos peitos.
      </Text>
      <FlatList
        data={exerciseData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text>Nenhum exercício encontrado.</Text>}
      />
    </ScrollView>
  );
};

export default PeitosTreinoScreen;