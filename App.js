import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        title="+"
        onPress={() => {
          let count = counter +1
          setCounter(count);
        }}
      />

      <Text>Number: {counter}</Text>

      <Button
        title="-"
        onPress={() => {
          let count = counter - 1
          setCounter(count);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
