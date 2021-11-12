import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainText}>
        <View
          style={{
            height: "50%",
            justifyContent: "flex-end",
            alignItems: "center",
            // backgroundColor: "#ff933d",
          }}
        >
          <Text style={styles.title}>AJUDE QUEM MAIS PRECISA</Text>
        </View>
        <View
          style={{
            height: "50%",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={styles.description}>
            Entre em contato com projetos em todo país e descubra como sua ajuda
            é mais importante do que você imagina
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-end",
            }}
            onPress={() => navigation.navigate("HelpPage")}
          >
            <Text style={styles.link}>AJUDAR AGORA</Text>
            <View style={styles.circleLink}>
              <Text style={styles.arrow}> > </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imgs}>
        <View>
          <Image
            source={require("../assets/old.png")}
            style={styles.imgBelow}
          />
        </View>
        <View style={styles.imgAboveDiv}>
          <Image
            source={require("../assets/kid.png")}
            style={styles.imgAbove}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    height: "48%",
    paddingHorizontal: 28,
  },
  title: {
    fontSize: 43,
    color: "#E084C0",
    fontWeight: "bold",
    textAlign: "right",
  },
  description: {
    fontSize: 20,
    color: "#9F9F9F",
    textAlign: "right",
  },
  link: {
    fontSize: 15,
    fontWeight: "700",
    color: "#B526AF",
  },
  circleLink: {
    height: 16,
    width: 16,
    borderRadius: 100,
    backgroundColor: "#B526AF",
    marginHorizontal: 10,
  },
  arrow: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  imgs: {
    height: "52%",

    padding: 20,
    paddingTop: 0,
  },
  imgBelow: {
    width: 220,
    height: 170,
    borderRadius: 10,
  },
  imgAboveDiv: {
    position: "absolute",
    bottom: 25,
    right: 18,
  },
  imgAbove: {
    width: 300,
    height: 180,
    borderRadius: 20,
  },
});
