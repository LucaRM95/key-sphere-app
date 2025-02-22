import { ActivityRoutes } from "@/app/routes/appRoutes";
import ListItemLinks from "@/components/common/ListItemLinks";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const SearchLayout = () => {
  return (
    <ScrollView style={styles.container}>
      {ActivityRoutes.map(({ icon, name, title }) => (
        <ListItemLinks key={name} name={icon} text={title} withArrow />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: "100%",
    backgroundColor: "white",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default SearchLayout;
