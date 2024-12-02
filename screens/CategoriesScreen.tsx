import { CATEGORIES } from "@/data/dummy-data";
import { FlatList, ListRenderItemInfo } from "react-native";
import Category from "@/models/category";
import CategoryGridTile from "@/components/CategoryGridTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "@/App";

type CategoriesScreenProps = NativeStackScreenProps<
  StackParamList,
  "MealsCategories"
>;

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
