import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface Props {
  images: Array<string>;
}

const width = Dimensions.get("window").width;

const CustomCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;
  const carouselRef = useRef<ICarouselInstance>(null);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      carouselRef.current?.scrollTo({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };

  const goToNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
      carouselRef.current?.scrollTo({
        index: currentIndex + 1,
        animated: true,
      });
    }
    if(currentIndex === totalSlides - 1){
      setCurrentIndex(0)
      carouselRef.current?.scrollTo({
        index: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.imgContainer}>
      <Carousel
        ref={carouselRef}
        loop={false}
        width={width - 20}
        height={300}
        autoPlay={false}
        data={images}
        scrollAnimationDuration={600}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <Image source={item} style={styles.img} contentFit="cover" />
        )}
      />

      {/* Left Arrow */}
      <Pressable
        style={[styles.arrowButton, styles.leftArrow]}
        onPress={goToPrevious}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </Pressable>

      {/* Right Arrow */}
      <Pressable
        style={[styles.arrowButton, styles.rightArrow]}
        onPress={goToNext}
      >
        <Ionicons name="chevron-forward" size={24} color="white" />
      </Pressable>

      {/* Custom Dots Pagination */}
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.favButtonContainer}>
        <Pressable style={styles.favButton}>
          <Ionicons name="heart-outline" size={16} color="black" />
        </Pressable>
        <Chip style={styles.chip}>
          <Text style={styles.chipText}>Super Destacado</Text>
        </Chip>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    height: 300,
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  favButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "100%",
    position: "absolute",
    padding: 10,
    right: 0,
  },
  favButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#ff5500",
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
    height: 40,
    width: 40,
  },
  chip: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    backgroundColor: "#ffff",
    borderRadius: 30,
  },
  chipText: {
    color: "gray",
    fontSize: 10,
    fontWeight: "regular",
  },
  arrowButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -12 }],
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    padding: 10,
    zIndex: 2,
  },
  leftArrow: {
    left: 10,
  },
  rightArrow: {
    right: 10,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#ff5500",
    width: 20,
  },
  inactiveDot: {
    backgroundColor: "white",
  },
});

export default CustomCarousel;
