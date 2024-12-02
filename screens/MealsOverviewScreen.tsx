import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "@/App";
import { MEALS } from "@/data/dummy-data";
import Meal from "@/models/meal";
import MealItem from "@/components/MealItem";

type MealsOverviewScreenProps = NativeStackScreenProps<
  StackParamList,
  "MealsOverview"
>;

const MealsOverviewScreen = ({ route }: MealsOverviewScreenProps) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId),
  );

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    const item = itemData.item;
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
