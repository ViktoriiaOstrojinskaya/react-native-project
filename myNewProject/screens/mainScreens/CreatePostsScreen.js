import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

const initialState = {
  name: "",
  location: null,
};

const CreatePostsScreen = ({ navigation }) => {
  const [description, setDescription] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo);
  };

  const sendPublish = () => {
    navigation.navigate("Posts", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View syle={styles.takePhotoContainer}>
            <Image source={{ uri: photo }} style={styles.takePhoto} />
          </View>
        )}
        <TouchableOpacity style={styles.iconContainer} onPress={takePhoto}>
          <Ionicons name="ios-camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>

      <View style={{ ...styles.descriptionContainer, marginTop: 32 }}>
        <TextInput
          placeholder="Name..."
          onChangeText={(value) =>
            setDescription((prevState) => ({ ...prevState, name: value }))
          }
          style={styles.descriptionText}
        />
      </View>

      <View style={{ ...styles.descriptionContainer, marginTop: 16 }}>
        <TextInput
          placeholder="Location..."
          onChangeText={(value) =>
            setDescription((prevState) => ({ ...prevState, location: value }))
          }
          style={styles.descriptionText}
        />
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={sendPublish}
        >
          <Text style={styles.btnTitle}>Publish</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconTrash}>
        <TouchableOpacity activeOpacity={0.8} style={styles.iconBackground}>
          <Ionicons name="trash-outline" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    height: 240,
    marginTop: 32,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    borderColor: "#fff",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  takePhoto: {
    flex: 1,
    height: 240,
    width: 343,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: "#f6f6f6",
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 100,
    marginTop: 32,
  },
  btnTitle: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  iconTrash: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  iconBackground: {
    backgroundColor: "#f6f6f6",
    height: 40,
    width: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginHorizontal: 16,
  },
  descriptionText: {
    height: 50,
  },
});

export default CreatePostsScreen;
