import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import axios from "axios";

export default function HelpPage({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://10.0.2.2:8080/api/post")
      .then((res) => setPosts(res.data));
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://10.0.2.2:8080/api/post/${id}`);
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.titleSectionDiv}>
          <Image
            source={require("../assets/donateImg.png")}
            style={styles.iconImg}
          />
          <Text style={styles.sectionTitle}>EXPLORAR </Text>
          <Text
            style={styles.sectionTitleCreate}
            onPress={() => navigation.navigate("CreatePost")}
          >
            | CRIAR POST
          </Text>
        </View>
        {posts &&
          posts.map((post, i) => {
            return (
              <View style={styles.section} key={i}>
                <View style={styles.centeredView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text
                          style={styles.textStyle}
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          X
                        </Text>
                        <View style={styles.modalInfoContainer}>
                          <Text
                            style={styles.modalText}
                            onPress={() =>
                              navigation.navigate("EditPost", { id: post.id })
                            }
                          >
                            EDITAR POST
                          </Text>
                        </View>
                        <View style={styles.modalInfoContainer}>
                          <Text
                            style={styles.modalText}
                            onPress={() => deletePost(post.id)}
                          >
                            DELETAR POST
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>
                <View style={styles.donateView}>
                  <View style={styles.imgDiv}>
                    <Image
                      source={require("../assets/kid.png")}
                      style={styles.img2}
                    />
                  </View>
                  <View style={styles.infoContainer}>
                    <View style={styles.titleView}>
                      <Text style={styles.title}>{post.titulo}</Text>
                    </View>
                    <View style={styles.descriptionView}>
                      <Text style={styles.description}>{post.ong.nome}</Text>
                    </View>
                    <View style={styles.detailsView}>
                      <Text
                        style={styles.details}
                        onPress={() => setModalVisible(true)}
                      >
                        ADMIN
                      </Text>
                      <Text
                        style={styles.details}
                        onPress={() =>
                          navigation.navigate("DetailsPage", { id: post.id })
                        }
                      >
                        DETALHES
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
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
    paddingBottom: 50,
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
    height: 370,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#707070",
  },
  sectionTitleCreate: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E084C0",
  },
  iconImg: {
    height: 33,
    width: 33,
    marginHorizontal: 5,
  },
  imgDiv: {
    height: "60%",
    marginVertical: 10,
  },
  img: {
    height: 220,
    borderRadius: 10,
  },
  img2: {
    height: 220,
    borderRadius: 10,
    width: 250,
  },
  infoContainer: {
    height: 100,
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
    height: 50,
    justifyContent: "center",
  },
  description: {
    textAlign: "center",
    color: "#9F9F9F",
    fontSize: 14,
  },
  detailsView: {
    marginTop: 5,
    height: 25,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  details: {
    color: "#B526AF",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 20,
    shadowRadius: 40,
    elevation: 20,
    paddingTop: 0,
  },
  modalInfoContainer: {
    padding: 10,
    borderWidth: 2,
    margin: 5,
    borderColor: "#D8D8D8",
    borderRadius: 4,
    width: 150,
    textAlign: "center",
  },
  textStyle: {
    paddingTop: 0,
    fontSize: 24,
    left: 90,
  },
  modalText: {
    textAlign: "center",
  },
});
