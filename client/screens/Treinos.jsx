import React from "react";
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "../styles/treinos.jsx";

// -----------------
//   SUBNAVEGACAO
// -----------------

const Stack = createStackNavigator();

import PeitoTreinoScreen from "./Treinos/Peito.jsx";
import CostasTreinoScreen from "./Treinos/Costas.jsx";
import PernasTreinoScreen from "./Treinos/Pernas.jsx";
import BracosTreinoScreen from "./Treinos/Bracos.jsx";
import OmbrosTreinoScreen from "./Treinos/Ombros.jsx";
import AbdomenTreinoScreen from "./Treinos/Abdomen.jsx";

// -----------------
//   SUBNAVEGACAO
// -----------------

const TreinosScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Treinos"
        component={TreinosHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Treino de Peito" component={PeitoTreinoScreen} />
      <Stack.Screen name="Treino de Costas" component={CostasTreinoScreen} />
      <Stack.Screen name="Treino de Pernas" component={PernasTreinoScreen} />
      <Stack.Screen name="Treino de Braços" component={BracosTreinoScreen} />
      <Stack.Screen name="Treino de Ombros" component={OmbrosTreinoScreen} />
      <Stack.Screen name="Treino de Abdômen" component={AbdomenTreinoScreen} />
    </Stack.Navigator>
  );
};

// -----------------
//  JSON DE TREINOS
// -----------------

const TreinosHomeScreen = ({ navigation }) => {
  const cards = [
    {
      image: require("../images/card1.png"),
      bullet: "🏋️",
      title: "Treino de Peito",
      description: "Treino focado no desenvolvimento do peitoral",
      time: "45-60 min/dia",
      icon: "clock",
      benefits: "Fortalecimento",
      onPress: () => navigation.navigate("Treino de Peito"),
    },

    {
      image: require("../images/card2.png"),
      bullet: "🏋️",
      title: "Treino de Costas",
      description: "Treino para fortalecer a musculatura das costas",
      time: "45-60 min/dia",
      icon: "clock",
      benefits: "Postura",
      onPress: () => navigation.navigate("Treino de Costas"),
    },

    {
      image: require("../images/card3.png"),
      bullet: "🏋️",
      title: "Treino de Pernas",
      description: "Treino para fortalecer as pernas e glúteos",
      time: "45-60 min/dia",
      icon: "clock",
      benefits: "Resistência",
      onPress: () => navigation.navigate("Treino de Pernas"),
    },

    {
      image: require("../images/card1.png"),
      bullet: "🏋️",
      title: "Treino de Braços",
      description: "Treino para desenvolver os músculos dos braços",
      time: "45-60 min/dia",
      icon: "clock",
      benefits: "Força",
      onPress: () => navigation.navigate("Treino de Braços"),
    },

    {
      image: require("../images/card2.png"),
      bullet: "🏋️",
      title: "Treino de Ombros",
      description: "Treino para fortalecer e tonificar os ombros",
      time: "45-60 min/dia",
      icon: "clock",
      benefits: "Estabilidade",
      onPress: () => navigation.navigate("Treino de Ombros"),
    },

    {
      image: require("../images/card3.png"),
      bullet: "🏋️",
      title: "Treino de Abdômen",
      description: "Treino para fortalecer e definir os músculos abdominais",
      time: "30-45 min/dia",
      icon: "clock",
      benefits: "Firmeza",
      onPress: () => navigation.navigate("Treino de Abdômen"),
    },
  ];

  // -----------------
  //  RENDER DO APP
  // -----------------

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Planos</Text>
        <Text style={styles.subtitle}>
          Tipos de planos para você começar a se exercitar
        </Text>
      </View>

      <View style={styles.cardContainer}>
        {cards.map((card, index) => (
          <ImageBackground key={index} source={card.image} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardBullet}>{card.bullet}</Text>
              <Text style={styles.cardTitle}>{card.title}</Text>
            </View>

            <Text style={styles.cardDescription}>{card.description}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>
                <FontAwesome5 name={card.icon} style={styles.icon} />{" "}
                {card.time}
              </Text>
              <Text style={styles.cardFooterText}>
                <FontAwesome5 name="lightbulb" style={styles.icon} />{" "}
                {card.benefits}
              </Text>
            </View>

            <TouchableOpacity style={styles.startButton} onPress={card.onPress}>
              <Text style={styles.startButtonText}>Iniciar</Text>
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </View>
    </ScrollView>
  );
};

export default TreinosScreen;