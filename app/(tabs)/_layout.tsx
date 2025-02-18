import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Routes from "../routes/appRoutes";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "rgb(255, 255, 255)",
            elevation: 0,
            shadowOpacity: 0,
          },
          default: {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            elevation: 0,
            shadowOpacity: 0,
          },
        }),
      }}
    >
      {Routes.map((route) => (
        <Tabs.Screen
          key={route.name}
          name={route.name}
          options={{
            title: `${route.title}`,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={24} name={route.icon} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
