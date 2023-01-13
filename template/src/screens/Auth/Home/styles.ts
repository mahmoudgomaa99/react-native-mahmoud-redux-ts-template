import { Dimensions, StyleSheet } from "react-native";
import COLORS from "values/colors";
import { MarginsAndPaddings } from "values/Dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.white,
  },
  text: {
    color: COLORS.black,
    marginTop: 10,
  },
});
