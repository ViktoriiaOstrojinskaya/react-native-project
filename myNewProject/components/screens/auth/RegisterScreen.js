import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/image/main-bg.png")}
      >
        <View style={styles.form}>
          <Text style={styles.inputTitle} textAlign="center">
            Registration
          </Text>

          <View>
            <TextInput
              style={{
                ...styles.input,
                marginBottom: 16,
              }}
              placeholder="Login"
              textAlign="left"
            />
          </View>

          <View>
            <TextInput
              style={{
                ...styles.input,
                marginBottom: 16,
              }}
              placeholder="Email"
              textAlign="left"
            />
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              textAlign="left"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Sing up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footer}>
            <Text style={styles.footerTitle}>Do you have account? Log in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    // position: "relative",

    height: 549,
    marginTop: 263,
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",

    // justifyContent: "flex-end",
    // position: "relative",
    // // marginHorizontal: 16,
    // alignItems: "stretch",

    // backgroundColor: "#FFFFFF",
    // height: 520,

    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#f6f6f6",
    borderColor: "#e8e8e8",
    height: 50,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
  },
  inputTitle: {
    // fontWeight: 500,
    fontSize: 30,
    // text: 1.16,
    color: "#212121",
    textAlign: "center",
    marginBottom: 32,
    // fontFamily: "Roboto-Medium",
  },
  btn: {
    backgroundColor: "#ff6c00",
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 100,
    marginTop: 43,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    marginTop: 16,
  },
  footerTitle: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RegistrationScreen;
