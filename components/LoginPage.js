import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

export default function LoginPage({ navigation }) {
  const [id, setId] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState(false);

  const retrieveUserLogin = (id, cpf) => {
    axios
      .get(`http://10.0.2.2:8080/api/usuario/${id}`)
      .then((res) => {
        if (res.data.cpf === cpf) {
          setError(false);
          navigation.navigate("HelpPage");
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="ID"
          onChangeText={(id) => setId(id)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          onChangeText={(cpf) => setCpf(cpf)}
        />
        {error && (
          <Text style={styles.errorText}>
            *Erro no login. Por favor, revise seus dados e tente novamente
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterPage")}
        >
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonConfirm}>
          <Text
            style={styles.buttonTextConfirm}
            onPress={() => retrieveUserLogin(id, cpf)}
          >
            CONFIRMAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    color: "#383838",
    marginTop: 100,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderColor: "#808080",
    width: 330,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginVertical: 30,
  },
  errorText: {
    width: 330,
    borderRadius: 20,
    paddingHorizontal: 20,
    color: "#ff0000",
  },
  buttonConfirm: {
    borderWidth: 2,
    height: 60,
    width: 140,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#E084C0",
  },
  button: {
    borderWidth: 2,
    height: 60,
    width: 140,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#808080",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "#808080",
  },
  buttonTextConfirm: {
    fontSize: 18,
    textAlign: "center",
    color: "#E084C0",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    flex: 1,
  },
});
