import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ToggleButton from "./ToggleButton";

interface Props {
  setModalVisible?: () => void;
  pathname: string;
}

const Header = ({ setModalVisible = () => {}, pathname }: Props) => {
  return (
    <>
      {pathname === "/" ? (
        <View style={styles.filterHeader}>
          <Pressable onPress={setModalVisible}>
            <Text style={styles.title}>Ordenar</Text>
          </Pressable>
          <ToggleButton buttonTitle={["Listado", "Mapa"]} />
          <Text style={styles.title}>Filtros</Text>
        </View>
      ) : pathname === "/search" ? (
        <View style={styles.searchHeader}>
          <Text style={styles.searchTitle}>¿What are you searching?</Text>
          <ToggleButton buttonTitle={["New search", "Lasts search"]} full />
        </View>
      ) : (
        <View style={styles.header}>
          <Text style={styles.headTitle}>{pathname.split("/")}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  filterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 55,
    height: 100,
    elevation: 2,
    paddingBottom: 10,
  },
  searchHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 60,
    height: 150,
    elevation: 2,
    paddingBottom: 10,
    gap: 10
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 40,
    paddingBottom: 10,
    height: 100,
  },
  headTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textTransform: "capitalize",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ff5500",
  },
});

export default Header;
