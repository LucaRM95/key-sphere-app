import { ButtonGroup } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

interface ToggleButtonProps {
  full?: boolean;
  buttonTitle: Array<string>
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ full = false, buttonTitle }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ButtonGroup
      buttons={buttonTitle}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      containerStyle={[
        styles.toggleContainer,
        { width: full ? "100%" : "35%" },
      ]}
      buttonStyle={styles.toggleButton}
      selectedButtonStyle={styles.toggleButtonActive}
      textStyle={{ fontSize: 15 }}
      innerBorderStyle={{ width: 0 }}
    />
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  toggleContainer: {
    borderColor: "#ff5500",
    borderRadius: 10,
    height: 35,
    width: "35%",
    overflow: "hidden",
  },
  toggleButton: {
    backgroundColor: "white",
    fontWeight: 600,
    tintColor: "#ff5500",
  },
  toggleButtonActive: {
    borderRadius: 8,
    backgroundColor: "#ff5500",
    color: "white",
    margin: 2,
  },
});
