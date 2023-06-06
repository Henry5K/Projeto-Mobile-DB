import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Alert } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { styles } from "../../styles/exercices.jsx";
import axios from "axios";

// -----------------
//   LISTA TREINOS
// -----------------

const OmbosTreinoScreen = () => {
  const [exerciseData, setExerciseData] = React.useState([
    {
      day: 1,
      title: "Desenvolvimento militar com barra",
      description:
        "Realize o desenvolvimento militar com barra para fortalecer os ombros. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 2,
      title: "Elevação lateral com halteres",
      description:
        "Faça a elevação lateral com halteres para trabalhar os músculos laterais dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 3,
      title: "Desenvolvimento Arnold",
      description:
        "Realize o desenvolvimento Arnold para promover o crescimento e a definição dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 105,
      time: 12,
    },
    {
      day: 4,
      title: "Elevação frontal com halteres",
      description:
        "Faça a elevação frontal com halteres para fortalecer a parte frontal dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 5,
      title: "Desenvolvimento com halteres",
      description:
        "Realize o desenvolvimento com halteres para promover o equilíbrio e estabilidade dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 6,
      title: "Remada alta com barra",
      description:
        "Faça a remada alta com barra para fortalecer os músculos do ombro e trapézio. Realize 3 sets de 10-12 reps.",
      calories: 90,
      time: 10,
    },
    {
      day: 7,
      title: "Elevação frontal com corda",
      description:
        "Realize a elevação frontal com corda para trabalhar os músculos anteriores dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 8,
      title: "Desenvolvimento com barra na frente",
      description:
        "Faça o desenvolvimento com barra na frente para fortalecer os ombros. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 9,
      title: "Elevação lateral com cabos",
      description:
        "Realize a elevação lateral com cabos para trabalhar os músculos laterais dos ombros de forma constante. Realize 3 sets de 12-15 reps.",
      calories: 75,
      time: 8,
    },
    {
      day: 10,
      title: "Desenvolvimento com halteres Arnold",
      description:
        "Faça o desenvolvimento com halteres Arnold para promover o crescimento e a definição dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 105,
      time: 12,
    },
    {
      day: 11,
      title: "Elevação frontal com corda",
      description:
        "Realize a elevação frontal com corda para fortalecer a parte frontal dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 12,
      title: "Desenvolvimento com halteres",
      description:
        "Faça o desenvolvimento com halteres para promover o equilíbrio e estabilidade dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 13,
      title: "Elevação lateral com halteres sentado",
      description:
        "Realize a elevação lateral com halteres sentado para fortalecer os músculos laterais dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 14,
      title: "Desenvolvimento com barra por trás",
      description:
        "Faça o desenvolvimento com barra por trás para trabalhar os ombros de forma intensa. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 15,
      title: "Elevação frontal com barra",
      description:
        "Realize a elevação frontal com barra para fortalecer a parte frontal dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 16,
      title: "Desenvolvimento com halteres sentado",
      description:
        "Faça o desenvolvimento com halteres sentado para promover o equilíbrio e estabilidade dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 17,
      title: "Remada alta com halteres",
      description:
        "Realize a remada alta com halteres para fortalecer os músculos do ombro e trapézio. Realize 3 sets de 10-12 reps.",
      calories: 90,
      time: 10,
    },
    {
      day: 18,
      title: "Elevação lateral com cabo",
      description:
        "Faça a elevação lateral com cabo para trabalhar os músculos laterais dos ombros de forma constante. Realize 3 sets de 12-15 reps.",
      calories: 75,
      time: 8,
    },
    {
      day: 19,
      title: "Desenvolvimento com halteres Arnold",
      description:
        "Realize o desenvolvimento com halteres Arnold para promover o crescimento e a definição dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 105,
      time: 12,
    },
    {
      day: 20,
      title: "Elevação frontal com corda",
      description:
        "Faça a elevação frontal com corda para fortalecer a parte frontal dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 21,
      title: "Desenvolvimento com halteres",
      description:
        "Realize o desenvolvimento com halteres para promover o equilíbrio e estabilidade dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 22,
      title: "Elevação lateral com halteres sentado",
      description:
        "Faça a elevação lateral com halteres sentado para fortalecer os músculos laterais dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 23,
      title: "Desenvolvimento com barra por trás",
      description:
        "Realize o desenvolvimento com barra por trás para trabalhar os ombros de forma intensa. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 24,
      title: "Elevação frontal com barra",
      description:
        "Faça a elevação frontal com barra para fortalecer a parte frontal dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 25,
      title: "Desenvolvimento com halteres sentado",
      description:
        "Realize o desenvolvimento com halteres sentado para promover o equilíbrio e estabilidade dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
    },
    {
      day: 26,
      title: "Remada alta com halteres",
      description:
        "Faça a remada alta com halteres para fortalecer os músculos do ombro e trapézio. Realize 3 sets de 10-12 reps.",
      calories: 90,
      time: 10,
    },
    {
      day: 27,
      title: "Elevação lateral com cabo",
      description:
        "Realize a elevação lateral com cabo para trabalhar os músculos laterais dos ombros de forma constante. Realize 3 sets de 12-15 reps.",
      calories: 75,
      time: 8,
    },
    {
      day: 28,
      title: "Desenvolvimento com halteres Arnold",
      description:
        "Faça o desenvolvimento com halteres Arnold para promover o crescimento e a definição dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 105,
      time: 12,
    },
    {
      day: 29,
      title: "Elevação frontal com corda",
      description:
        "Realize a elevação frontal com corda para fortalecer a parte frontal dos ombros. Realize 3 sets de 12-15 reps.",
      calories: 70,
      time: 8,
    },
    {
      day: 30,
      title: "Desenvolvimento com halteres",
      description:
        "Faça o desenvolvimento com halteres para promover o equilíbrio e estabilidade dos ombros. Realize 4 sets de 8-10 reps.",
      calories: 100,
      time: 10,
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
      <Text style={styles.title}>Treino dos Ombros</Text>
      <Text style={styles.description}>
        Exercicios preparados com o foco nos ombros.
      </Text>
      <FlatList
        data={exerciseData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text>Nenhum exercicio encontrado.</Text>}
      />
    </ScrollView>
  );
};

export default OmbosTreinoScreen;