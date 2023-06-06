import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/perfil.jsx";

const PerfilScreen = () => {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleNomeChange = (text) => {
    setNome(text);
  };

  const handleNascimentoChange = (text) => {
    setNascimento(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleTelefoneChange = (text) => {
    setTelefone(text);
  };

  const handleSalvar = () => {
    if (nome.trim() === "" || nascimento.trim() === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log("Nome:", nome);
    console.log("Data de Nascimento:", nascimento);
    console.log("Email:", email);
    console.log("Telefone:", telefone);

    Alert.alert("Sucesso", "Preferências salvas com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#777"
          value={nome}
          onChangeText={handleNomeChange}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Data de Nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua data de nascimento"
          placeholderTextColor="#777"
          value={nascimento}
          onChangeText={handleNascimentoChange}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#777"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          placeholderTextColor="#777"
          value={telefone}
          onChangeText={handleTelefoneChange}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
        <Ionicons name="ios-save" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default PerfilScreen;