import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/image/main-bg.png")}
      >
        <View
          style={{
            ...styles.formContainer,
            paddingBottom: isShowKeyboard ? 194 : 78,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
              }}
            >
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
                  onFocus={() => setIsShowKeyboard(true)}
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
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  textAlign="left"
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Sing up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.footer}>
                <Text style={styles.footerTitle}>
                  Do you have account? Log in
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    marginHorizontal: 16,
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
    marginTop: 92,
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
