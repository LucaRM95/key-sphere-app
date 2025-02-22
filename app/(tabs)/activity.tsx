import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "@/components/common/Header";
import { usePathname } from "expo-router/build/hooks";
import ActivityLayout from "@/components/features/activity/Layout";

export default function ActivityScreen() {
  const pathname = usePathname();
  
  return (
    <SafeAreaProvider>
      <Header pathname={pathname} />
      <SafeAreaView style={styles.container}>
        <ActivityLayout />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
  },
});
