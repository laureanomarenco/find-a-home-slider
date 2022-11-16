import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import slidesData from "./data/slidesData.js";

export default function App() {
  return (
    
    <View style={styles.slideCointainer}>
      <FlatList
      horizontal={true}
      pagingEnabled={true}
      data={slidesData}
      renderItem={({ item: slide }) => (
        // Recorre cada slide y renderiza los datos respectivos
        <View
        style={{
          backgroundColor: slide.backgroundColor,
          marginTop: Constants.statusBarHeight,
        }}
        >
            <View style={styles.item}>
              <View style={styles.containerLogo}>
                {slide.backgroundColor === "#FFC733" ? (
                  <Image
                  source={require("./assets/logoFAHPink.png")}
                  style={styles.logo}
                  ></Image>
                ) : (
                  <Image
                  source={require("./assets/logoFAHYellow.png")}
                  style={styles.logo}
                  ></Image>
                )}
              </View>
              <View style={styles.container}>
                
                {slide.register && 
                //Si el slide es de registro renderiza un titulo y una imagén extra.
                <>
                  <Text style={styles.text}>Register</Text>
                  <Image
                  source={require("./assets/googleIcon.png")}
                  style={styles.imageRegister}
                  ></Image>
                  </>
                }
                <Text style={styles.text}>{slide.text}</Text>
                {slide.image && (
                  <Image
                    source={slide.url}
                    style={styles.image}
                    ></Image>
                    )}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slideCointainer: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    fontSize: 150,
    width: Dimensions.get("window").width,
  },
  containerLogo: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  logo: {
    width: 67,
    height: 60,
    margin: 40,
  },
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "#FFF",
    margin: 30,
    fontSize: 28,
    textAlign: "center",
  },
  image: {
    position: "absolute",
    bottom: 0,
  },
  imageRegister: {
    position: "relative",
  },
});
