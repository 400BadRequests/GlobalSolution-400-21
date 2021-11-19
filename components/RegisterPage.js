import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import axios from "axios";

export default function RegisterPage({ navigation, route }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const registerIntegration = (email, name, phone, address, cpf) => {
    axios
      .post("http://10.0.2.2:8080/api/usuario", {
        email: email,
        nome: name,
        telefone: phone,
        cpf: cpf,
        endereco: address,
      })
      .then((res) => navigation.navigate("HelpPage"))
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="NOME COMPLETO"
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          onChangeText={(cpf) => setCpf(cpf)}
        />
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="ENDEREÇO"
          onChangeText={(address) => setAddress(address)}
        />
        <TextInput
          style={styles.input}
          placeholder="NÚMERO DE TELEFONE"
          onChangeText={(phone) => setPhone(phone)}
        />
        {error && (
          <Text style={styles.errorText}>
            *Erro no registro. Por favor, revise seus dados e tente novamente
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => registerIntegration(name, email, address, phone, cpf)}
        >
          <Text style={styles.buttonTextConfirm}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  input: {
    height: 50,
    margin: 8,
    borderWidth: 2,
    borderColor: "#808080",
    width: 330,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 60,
    marginBottom: 50,
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
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  errorText: {
    width: 330,
    borderRadius: 20,
    paddingHorizontal: 20,
    color: "#ff0000",
  },
  buttonTextConfirm: {
    fontSize: 18,
    textAlign: "center",
    color: "#E084C0",
  },
  buttonConfirm: {
    borderWidth: 2,
    height: 60,
    width: 140,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#E084C0",
  },
});
