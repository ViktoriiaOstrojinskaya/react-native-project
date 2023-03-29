import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostsScreen = ({ route }) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostsScreen;
