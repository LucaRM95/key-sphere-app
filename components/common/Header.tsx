import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  setModalVisible?: () => void;
}

const Header = ({ setModalVisible = () => {} }: Props) => {
  return (
    <View style={styles.lightHeader}>
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
  lightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 55,
    height: 90,
    elevation: 2,
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
