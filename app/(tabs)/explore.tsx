import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text className="text-black">Explore Screen</Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
