import { CATEGORIES } from "@/data/dummy-data";
import { FlatList, ListRenderItemInfo } from "react-native";
import Category from "@/models/category";
import CategoryGridTile from "@/components/CategoryGridTile";

const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => (
  <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
);

const CategoriesScreen = () => {
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
