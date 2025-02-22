import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import PropertyCard from "./components/PropertyCard";

const properties = [1, 2, 3, 4, 5];

const PropertiesLayout = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontWeight: "bold", color: "black", marginBottom: 25 }}>
        You're watching {properties.length} properties
      </Text>
      {properties.map(( i ) => (
        <PropertyCard key={i} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: "100%",
  },
});

export default PropertiesLayout;
