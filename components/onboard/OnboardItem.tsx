import { Image, View, useWindowDimensions } from "react-native"
import { ThemedText } from "../shared/ThemedText"

const OnboardItem = ({ title, description, image }: any) => {
  const { width } = useWindowDimensions()
  return (
    <View style={{ flex: 1, width, paddingHorizontal: 20 }}>
      <Image
        source={image}
        style={{ width, height: 337, left: -30, marginTop: 30 }}
        resizeMode="contain"
      />
      <ThemedText
        size="h1"
        weight="bold"
        style={{ color: "white", textTransform: "capitalize" }}
      >
        {title}
      </ThemedText>
      <ThemedText style={{ color: "white" }}>{description}</ThemedText>
    </View>
  )
}

export default OnboardItem
