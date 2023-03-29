import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;

      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/image/main-bg.png")}
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
              <View style={{ ...styles.form, width: dimensions }}>
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
                    value={state.login}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        login: value,
                      }))
                    }
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
                    value={state.email}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                  />
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    textAlign="left"
                    secureTextEntry={true}
                    value={state.password}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnTitle}>Sing up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.footer}
                  onPress={() => navigation.navigate("login")}
                >
                  <Text style={styles.footerTitle}>
                    Do you have account? Log in
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
    padding: 16,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
  },
  inputTitle: {
    fontSize: 30,
    color: "#212121",
    textAlign: "center",
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
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
    fontFamily: "Roboto-Regular",
  },
  footer: {
    marginTop: 16,
  },
  footerTitle: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
  },
});
