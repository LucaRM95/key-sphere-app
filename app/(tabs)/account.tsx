import { StyleSheet } from "react-native";
import { usePathname } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/common/Header";
import AccountLayout from "@/components/features/account/Layout";

export default function AccountScreen() {
  const pathname = usePathname();

  return (
    <SafeAreaProvider>
      <Header pathname={pathname} />
      <SafeAreaView style={styles.container}>
        <AccountLayout />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: "100%",
    backgroundColor: "transparent",
  },
});
