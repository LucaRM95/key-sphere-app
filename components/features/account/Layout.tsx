import {
  AccountConfigRoutes,
  AccountInfoRoutes,
  AccountRoutes,
  ActivityRoutes,
} from "@/app/routes/appRoutes";
import ListItemLinks from "@/components/common/ListItemLinks";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AccountLayout = () => {
  return (
    <>
      <Text style={styles.headline}>Settings</Text>
      <View style={styles.container}>
        {AccountConfigRoutes.map(({ icon, name, title }) => (
          <ListItemLinks key={name} name={icon} text={title} withArrow />
        ))}
      </View>
      <Text style={styles.headline}>Information</Text>
      <View style={styles.container}>
        {AccountInfoRoutes.map(({ icon, name, title }) => (
          <ListItemLinks key={name} name={icon} text={title} withArrow />
        ))}
      </View>
      <Text style={styles.headline}>Account</Text>
      <View style={styles.container}>
        {AccountRoutes.map(({ icon, name, title }) => (
            <ListItemLinks key={name} name={icon} text={title} withArrow />
        ))}
      </View>
    <Text style={styles.footer}>Version 1.0.1</Text>
    </>
  );
};

const styles = StyleSheet.create({
  headline: {
    backgroundColor: "#f2f2f2",
    color: "grey",
    padding: 10,
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
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
  footer:{
    padding: 10,
    color: "grey",
    fontSize: 12    
  }
});

export default AccountLayout;
