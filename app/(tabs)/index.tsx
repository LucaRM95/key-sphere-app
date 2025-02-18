import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PropertiesLayout from "../../components/features/properties/Layout";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <SafeAreaProvider>
      <Header />
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
