import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { OpaqueColorValue } from "react-native";
import { SymbolWeight } from "expo-symbols";
import { TextStyle } from 'react-native';

type AntDesignIcons = keyof typeof AntDesign.glyphMap;

// See MaterialIcons here: https://icons.expo.fyi
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: AntDesignIcons;
  size?: number;
  color: string | OpaqueColorValue;
  style?: TextStyle;
  weight?: SymbolWeight;
}) {  
  return <AntDesign name={name} size={size} color={color} style={style} />;
}
