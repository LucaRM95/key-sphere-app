import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/common/Header";
import SearchLayout from "@/components/features/search/Layout";
import { usePathname } from "expo-router";

export default function SearchScreen() {
  const pathname = usePathname();

  return (
    <SafeAreaProvider>
      <Header pathname={pathname} />
      <SafeAreaView style={styles.container}>
        <SearchLayout />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
