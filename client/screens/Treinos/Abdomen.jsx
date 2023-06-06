import React from "react";
import axios from "axios";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Alert } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { styles } from "../../styles/exercices.jsx";

// -----------------
//   LISTA TREINOS
// -----------------

const AbdomenTreinoScreen = () => {
  const [exerciseData, setExerciseData] = React.useState([
    {
      day: 1,
      title: "Prancha",
      description:
        "Realize uma prancha para fortalecer os músculos abdominais. Mantenha a posição por 30 segundos e descanse por 10 segundos. Repita por 3 séries.",
      calories: 50,
      time: 5,
    },
    {
      day: 2,
      title: "Crunch",
      description:
        "Faça o exercício de crunch para trabalhar os músculos abdominais. Realize 3 séries de 15-20 repetições.",
      calories: 60,
      time: 8,
    },
    {
      day: 3,
      title: "Prancha lateral",
      description:
        "Realize a prancha lateral para fortalecer os músculos abdominais oblíquos. Mantenha a posição por 30 segundos de cada lado e descanse por 10 segundos. Repita por 3 séries.",
      calories: 55,
      time: 6,
    },
    {
      day: 4,
      title: "Bicicleta no ar",
      description:
        "Faça o exercício de bicicleta no ar para trabalhar os músculos abdominais. Realize 3 séries de 15-20 repetições.",
      calories: 60,
      time: 8,
    },
    {
      day: 5,
      title: "Prancha com elevação de perna",
      description:
        "Realize a prancha com elevação de perna para fortalecer os músculos abdominais. Mantenha a posição por 30 segundos e levante uma perna de cada vez. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 6,
      title: "Mountain climbers",
      description:
        "Faça mountain climbers para trabalhar os músculos abdominais. Realize 3 séries de 15-20 repetições.",
      calories: 55,
      time: 6,
    },
    {
      day: 7,
      title: "Prancha com rotação",
      description:
        "Realize a prancha com rotação para fortalecer os músculos abdominais e oblíquos. Mantenha a posição por 30 segundos e gire o corpo alternando os lados. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 8,
      title: "Sit-ups",
      description:
        "Faça sit-ups para trabalhar os músculos abdominais. Realize 3 séries de 15-20 repetições.",
      calories: 60,
      time: 8,
    },
    {
      day: 9,
      title: "Prancha com elevação de braço",
      description:
        "Realize a prancha com elevação de braço para fortalecer os músculos abdominais e peitorais. Mantenha a posição por 30 segundos e levante um braço de cada vez. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 10,
      title: "Russian twist",
      description:
        "Faça o exercício de Russian twist para trabalhar os músculos abdominais oblíquos. Realize 3 séries de 15-20 repetições.",
      calories: 55,
      time: 6,
    },
    {
      day: 11,
      title: "Prancha com elevação de perna lateral",
      description:
        "Realize a prancha com elevação de perna lateral para fortalecer os músculos abdominais e oblíquos. Mantenha a posição por 30 segundos e levante uma perna de cada lado. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 12,
      title: "V-ups",
      description:
        "Faça V-ups para trabalhar os músculos abdominais. Realize 3 séries de 15-20 repetições.",
      calories: 60,
      time: 8,
    },
    {
      day: 13,
      title: "Prancha com toque no ombro",
      description:
        "Realize a prancha com toque no ombro para fortalecer os músculos abdominais e deltoides. Mantenha a posição por 30 segundos e toque o ombro alternando os lados. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 14,
      title: "Elevação de pernas",
      description:
        "Faça o exercício de elevação de pernas para trabalhar os músculos abdominais inferiores. Realize 3 séries de 15-20 repetições.",
      calories: 55,
      time: 6,
    },
    {
      day: 15,
      title: "Prancha com joelhos alternados",
      description:
        "Realize a prancha com joelhos alternados para fortalecer os músculos abdominais. Mantenha a posição por 30 segundos e alterne a elevação dos joelhos. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 16,
      title: "Reverse crunch",
      description:
        "Faça o exercício de reverse crunch para trabalhar os músculos abdominais inferiores. Realize 3 séries de 15-20 repetições.",
      calories: 60,
      time: 8,
    },
    {
      day: 17,
      title: "Prancha com torção",
      description:
        "Realize a prancha com torção para fortalecer os músculos abdominais e oblíquos. Mantenha a posição por 30 segundos e gire o corpo para um lado, estendendo o braço oposto. Alterne os lados e repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 18,
      title: "Leg raises alternados",
      description:
        "Faça leg raises alternados para trabalhar os músculos abdominais inferiores. Realize 3 séries de 15-20 repetições.",
      calories: 55,
      time: 6,
    },
    {
      day: 19,
      title: "Prancha com elevação de quadril",
      description:
        "Realize a prancha com elevação de quadril para fortalecer os músculos abdominais e glúteos. Mantenha a posição por 30 segundos e eleve o quadril o máximo que puder. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 20,
      title: "Toe touches",
      description:
        "Faça toe touches para trabalhar os músculos abdominais. Realize 3 séries de 15-20 repetições.",
      calories: 60,
      time: 8,
    },
    {
      day: 21,
      title: "Prancha com remada",
      description:
        "Realize a prancha com remada para fortalecer os músculos abdominais, braços e dorsais. Mantenha a posição por 30 segundos e puxe um braço de cada vez em direção ao corpo. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 22,
      title: "Scissor kicks",
      description:
        "Faça scissor kicks para trabalhar os músculos abdominais inferiores. Realize 3 séries de 15-20 repetições.",
      calories: 55,
      time: 6,
    },
    {
      day: 23,
      title: "Prancha com torção de joelhos",
      description:
        "Realize a prancha com torção de joelhos para fortalecer os músculos abdominais e oblíquos. Mantenha a posição por 30 segundos e gire o corpo para um lado, dobrando o joelho oposto em direção ao cotovelo. Alterne os lados e repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 24,
      title: "Bicycle crunch",
      description:
        "Faça bicycle crunch para trabalhar os músculos abdominais. Realize 3 séries de 15-20 repetições.",
      calories: 60,
      time: 8,
    },
    {
      day: 25,
      title: "Prancha com levantamento de braço e perna",
      description:
        "Realize a prancha com levantamento de braço e perna para fortalecer os músculos abdominais, glúteos e dorsais. Mantenha a posição por 30 segundos e levante um braço e a perna oposta. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 26,
      title: "Leg raises",
      description:
        "Faça leg raises para trabalhar os músculos abdominais inferiores. Realize 3 séries de 15-20 repetições.",
      calories: 55,
      time: 6,
    },
    {
      day: 27,
      title: "Prancha com toque no calcanhar",
      description:
        "Realize a prancha com toque no calcanhar para fortalecer os músculos abdominais e glúteos. Mantenha a posição por 30 segundos e toque o calcanhar alternando os lados. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 28,
      title: "Sit-ups com torção",
      description:
        "Faça sit-ups com torção para trabalhar os músculos abdominais e oblíquos. Realize 3 séries de 15-20 repetições.",
      calories: 60,
      time: 8,
    },
    {
      day: 29,
      title: "Prancha com knee tuck",
      description:
        "Realize a prancha com knee tuck para fortalecer os músculos abdominais e glúteos. Mantenha a posição por 30 segundos e leve o joelho em direção ao peito. Repita por 3 séries.",
      calories: 60,
      time: 8,
    },
    {
      day: 30,
      title: "Crunch inverso",
      description:
        "Faça o exercício de crunch inverso para trabalhar os músculos abdominais inferiores. Realize 3 séries de 15-20 repetições.",
      calories: 55,
      time: 6,
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
      <Text style={styles.title}>Treino de Abdomen</Text>
      <Text style={styles.description}>
        Exercicios preparados com o foco no abdomen.
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

export default AbdomenTreinoScreen;