import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CategoryMealsScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meal Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
