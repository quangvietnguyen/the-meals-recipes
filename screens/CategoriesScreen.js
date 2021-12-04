import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";

export default function CategoriesScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
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
