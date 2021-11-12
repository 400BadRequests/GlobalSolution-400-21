import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";

export default function HelpPage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.titleSectionDiv}>
          <Image
            source={require("../assets/favoriteImg.png")}
            style={styles.iconImg}
          />
          <Text style={styles.sectionTitle}>FAVORITOS</Text>
        </View>
        <View style={styles.donateView}>
          <View style={styles.imgDiv}>
            <Image source={require("../assets/old.png")} style={styles.img} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Velhinhas Carinhosas</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.description}>
                O projeto velhasa carinhosas é muito legal e bonnito, velhasa
                carinhosas é muito legal e bonnitovelhasa…
              </Text>
            </View>
            <View style={styles.detailsView}>
              <Text style={styles.details}>DETALHES</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.titleSectionDiv}>
          <Image
            source={require("../assets/donateImg.png")}
            style={styles.iconImg}
          />
          <Text style={styles.sectionTitle}>EXPLORAR</Text>
        </View>
        <View style={styles.donateView}>
          <View style={styles.imgDiv}>
            <Image source={require("../assets/kid.png")} style={styles.img2} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Crianças Fofinhas</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.description}>
                O projeto velhasa carinhosas é muito legal e bonnito, velhasa
                carinhosas é muito legal e bonnitovelhasa…
              </Text>
            </View>
            <View style={styles.detailsView}>
              <Text style={styles.details}>DETALHES</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    overflow: "scroll",
  },
  section: {
    height: 465,
    paddingHorizontal: 18,
    borderBottomWidth: 3,
    borderColor: "#D8D8D8",
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
    textAlign: "right",
    color: "#9F9F9F",
    fontSize: 14,
  },
  detailsView: {
    marginTop: 5,
    height: 25,
    alignItems: "flex-end",
    width: "90%",
  },
  details: {
    color: "#B526AF",
    fontWeight: "bold",
  },
});
