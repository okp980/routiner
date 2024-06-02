import { Image, View, useWindowDimensions } from "react-native"
import { ThemedText } from "../ThemedText"

const OnboardItem = ({ title, description, image }: any) => {
  const { width } = useWindowDimensions()
  return (
    <View style={{ flex: 1, width, paddingHorizontal: 32 }}>
      <Image
        source={image}
        style={{ width, height: 337, left: -30, marginTop: 30 }}
        resizeMode="contain"
      />
      <ThemedText
        type="large"
        style={{ color: "white", textTransform: "capitalize" }}
      >
        {title}
      </ThemedText>
      <ThemedText type="default" style={{ color: "white" }}>
        {description}
      </ThemedText>
    </View>
  )
}

export default OnboardItem
