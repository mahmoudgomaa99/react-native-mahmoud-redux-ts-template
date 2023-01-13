import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Svg from "atoms/Svg";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Svg name="oprojects" size={180} />
      <Text style={styles.text}>Powered By O-Projects</Text>
    </SafeAreaView>
  );
};

export default Home;
