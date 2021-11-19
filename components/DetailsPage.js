import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import axios from "axios";

export default function DetailsPage({ navigation, route }) {
  const { id } = route.params;
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:8080/api/post/${id}`)
      .then((res) => setDetails(res.data));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        {details ? (
          <View style={styles.section}>
            <View style={styles.donateView}>
              <View style={styles.infoContainer}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>{details.titulo}</Text>
                </View>
                <View style={styles.descriptionViewMain}>
                  <Text style={styles.descriptionMain}>
                    {details.descricao}
                  </Text>
                </View>
                <View style={styles.descriptionView}>
                  <Text style={styles.description}>{details.ong.nome}</Text>
                </View>
                <View style={styles.descriptionView}>
                  <Text style={styles.description}>
                    CNPJ: {details.ong.cnpj}
                  </Text>
                </View>
                <View style={styles.descriptionView}>
                  <Text style={styles.description}>
                    Endereço: {details.ong.endereco}
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        `mailto:${details.ong.email}?subject=Posso ajudar vocês&body=Olá! Quero ajudar`
                      )
                    }
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>E-MAIL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonConfirm}
                    onPress={() =>
                      Linking.openURL(
                        `whatsapp://send?text=hello&phone=${details.ong.telefone}`
                      )
                    }
                  >
                    <Text style={styles.buttonText}>WHATS APP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll",
  },
  section: {
    paddingHorizontal: 18,
    borderBottomWidth: 3,
    borderColor: "#D8D8D8",
    paddingBottom: 30,
  },
  titleSectionDiv: {
    justifyContent: "center",
    alignItems: "center",
    height: 62,
    flexDirection: "row",
  },
  donateView: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#D8D8D8",
    height: 450,
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#707070",
  },
  infoContainer: {
    height: 300,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    height: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: 22.5,
    color: "#B526AF",
  },
  descriptionView: {
    height: 30,
    justifyContent: "center",
  },
  descriptionViewMain: {
    height: 60,
    marginBottom: 40,
  },
  description: {
    textAlign: "center",
    color: "#9F9F9F",
    fontSize: 16,
  },
  descriptionMain: {
    textAlign: "center",
    color: "#9F9F9F",
    fontSize: 16,
    paddingTop: 20,
  },
  buttonConfirm: {
    borderWidth: 2,
    height: 50,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#E084C0",
  },
  button: {
    borderWidth: 2,
    height: 50,
    width: 140,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#808080",
    textAlign: "center",
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
    textAlignVertical: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    textAlignVertical: "center",
  },
});
