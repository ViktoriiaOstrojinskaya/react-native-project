import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  const { height, width } = useWindowDimensions();
  console.log({ height, width });

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("../../../assets/fonts/Roboto-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/image/main-bg.png")}
        >
          <View
            style={{
              ...styles.formContainer,
              paddingBottom: isShowKeyboard ? 194 : 114,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.form}>
                <Text style={styles.inputTitle} textAlign="center">
                  Log in
                </Text>

                <View>
                  <TextInput
                    style={{ ...styles.input, marginBottom: 16 }}
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
                  <Text style={styles.btnTitle}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footer}>
                  <Text style={styles.footerTitle}>
                    Already have the account? Sing up
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    padding: 16,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
  },
  inputTitle: {
    fontSize: 30,
    color: "#212121",
    textAlign: "center",
    marginTop: 32,
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

export default LoginScreen;
