import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomCarousel from "@/components/common/Carousel";

const images = [
  "https://imgar.zonapropcdn.com/avisos/resize/1/00/55/13/07/23/1200x1200/1948890533.jpg",
  "https://imgar.zonapropcdn.com/avisos/resize/1/00/55/13/07/23/1200x1200/1948890529.jpg",
  "https://imgar.zonapropcdn.com/avisos/resize/1/00/55/13/07/23/1200x1200/1948890532.jpg",
  "https://imgar.zonapropcdn.com/avisos/resize/1/00/55/13/07/23/1200x1200/1948890531.jpg",
];

const PropertyCard = () => {
  return (
    <View style={styles.container}>
      <CustomCarousel images={images} />
      <View style={styles.description}>
        <Text style={styles.title}>$ 360.000 </Text>
        <Text style={styles.subText}>$ 120.000 Expensas</Text>
        <Text style={styles.text}>
          Monroe 3600, Belgrano R, Belgrano, Capital Federal
        </Text>
        <View style={styles.area}>
          <Text style={styles.text}>32 m2</Text>
          <Text style={styles.text}>1 amb.</Text>
          <Text style={styles.text}>1 baño</Text>
        </View>
        <Text style={styles.text}>
          Este excelente departamento se encuentra en Belgrano R, ideal para
          quienes buscan un lugar cómodo y tranquilo para una estadía de larga
          duración...
        </Text>
        <View style={styles.buttons}>
          <Pressable style={styles.whatsappButton}>
            <Ionicons name="logo-whatsapp" size={20} color="white" />
          </Pressable>
          <Pressable style={styles.callButton}>
            <Text style={styles.buttonText}>Llamar</Text>
          </Pressable>
          <Pressable style={styles.contactButton}>
            <Text style={styles.buttonText}>Contactar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    gap: 4,
    marginBottom: 25,
  },
  description: {
    gap: 10,
    padding: 10,
  },
  area: {
    flexDirection: "row",
    gap: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 10,
    color: "grey",
    fontWeight: "600",
  },
  text: {
    fontSize: 10,
    fontWeight: "600",
  },
  whatsappButton: {
    backgroundColor: "#25d366",
    padding: 12,
    borderRadius: 16,
  },
  callButton: {
    backgroundColor: "purple",
    padding: 12,
    paddingHorizontal: 50,
    borderRadius: 16,
  },
  contactButton: {
    backgroundColor: "#ff5500",
    padding: 12,
    paddingHorizontal: 50,
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PropertyCard;
