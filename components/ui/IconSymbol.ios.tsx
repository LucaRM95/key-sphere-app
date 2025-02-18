import { AntDesign } from '@expo/vector-icons';
import { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, TextStyle } from 'react-native';

type AntDesignIcons = keyof typeof AntDesign.glyphMap;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight,
}: {
  name: AntDesignIcons;
  size?: number;
  color: string | OpaqueColorValue;
  style?: TextStyle;
  weight?: SymbolWeight;
}) {
  return (
    <AntDesign
      weight={weight}
      color={color}
      name={name}
      size={size}
      style={style}
    />
  );
}