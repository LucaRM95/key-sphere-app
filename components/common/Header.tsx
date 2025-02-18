import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  setModalVisible?: () => void;
}

const Header = ({ setModalVisible = () => {} }: Props) => {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={setModalVisible}
      >
        <Text style={styles.title}>Ordenar</Text>
      </Pressable>
      <Text style={styles.title}>Listado | Mapa</Text>
      <Text style={styles.title}>Filtros</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#272729",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,
    height: 110,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff5500",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  cartButton: {
    padding: 5,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
});

export default Header;
