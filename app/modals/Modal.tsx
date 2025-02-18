import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

interface Props {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  handlePresentModalPress: () => void;
}

const CustomModal = ({ handlePresentModalPress, bottomSheetModalRef }: Props) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        
        <BottomSheetModal
          ref={bottomSheetModalRef}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default CustomModal;
