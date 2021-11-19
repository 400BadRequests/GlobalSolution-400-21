import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import axios from "axios";

export default function EditPost({ navigation, route }) {
  const { id } = route.params;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://10.0.2.2:8080/api/post/${id}`).then((res) => {
      setDescription(res.data.descricao), setTitle(res.data.titulo);
    });
  }, []);

  const changePost = (title, description) => {
    axios
      .put(`http://10.0.2.2:8080/api/post/${id}`, {
        descricao: description,
        titulo: title,
        id_user: 1,
        tipoUsuario: 1
      })
      .then((res) => {
        navigation.navigate("HelpPage")
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          style={styles.input}
          placeholder="TÍTULO"
          onChangeText={(title) => setTitle(title)}
        />
        <TextInput
          value={description}
          style={styles.input}
          placeholder="DESCRICAO"
          onChangeText={(description) => setDescription(description)}
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
          onPress={() => changePost(title, description)}
        >
          <Text style={styles.buttonTextConfirm}>ALTERAR</Text>
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
