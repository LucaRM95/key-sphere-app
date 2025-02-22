import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PropertiesLayout from "../../components/features/properties/Layout";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "@/components/common/Header";
import { usePathname } from "expo-router/build/hooks";

export default function Home() {
  const pathname = usePathname();
  
  return (
    <SafeAreaProvider>
      <Header pathname={pathname} />
      <SafeAreaView style={styles.container}>
        <PropertiesLayout />
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
