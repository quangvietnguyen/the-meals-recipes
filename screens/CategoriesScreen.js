import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";

import { CATEGORIES } from "../data/data";
import Colors from "../constants/Colors";

const renderGridItem = (itemData) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate({ routeName: "CategoryMeals" });
      }}
    >
      <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

export default function CategoriesScreen(props) {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>The Categories Screen</Text>
    //   <Button
    //     title="Go to Meals"
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: "CategoryMeals" });
    //     }}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
