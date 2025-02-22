import { ListItem } from "@rneui/base";
import React from "react";
import { IconSymbol } from "../ui/IconSymbol";
import { AntDesign } from "@expo/vector-icons";

type AntDesignIcons = keyof typeof AntDesign.glyphMap;

interface Props {
  iconSize?: number;
  chevronSize?: number;
  name: AntDesignIcons;
  text: string;
  withArrow?: boolean;
}

const ListItemLinks = ({
  iconSize = 24,
  chevronSize = 25,
  name,
  text,
  withArrow = false,
}: Props) => {
  return (
    <ListItem style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
      <IconSymbol size={iconSize} name={name} color="black" />
      <ListItem.Content>
        <ListItem.Title>{text}</ListItem.Title>
      </ListItem.Content>
      {withArrow && <ListItem.Chevron color="#ff5500" size={chevronSize} />}
    </ListItem>
  );
};

export default ListItemLinks;
