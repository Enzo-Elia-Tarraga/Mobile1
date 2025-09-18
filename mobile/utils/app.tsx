import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { calculateIMC } from "./calculatelMC";




export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  function handleCalcular() {
    try {
      const { imc, classificacao } = calculateIMC(Number(peso), Number(altura));
      setResultado(`IMC: ${imc} - ${classificacao}`);
      setErro(null);
    } catch (e: any) {
      setErro(e.message);
      setResultado(null);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular" onPress={handleCalcular} />

      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
      {erro && <Text style={styles.erro}>{erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  resultado: {
    marginTop: 15,
    fontSize: 18,
    color: "green",
  },
  erro: {
    marginTop: 15,
    fontSize: 16,
    color: "red",
  },
});
