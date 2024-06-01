import { ThemedText } from "@/components/ThemedText"
import Button from "@/components/button/Button"
import { useAuth } from "@/context/auth"
import { onboard } from "@/lib/data"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import EnterIcon from "@/assets/svgs/enter.svg"
import AppleIcon from "@/assets/svgs/apple.svg"
import GoogleIcon from "@/assets/svgs/google.svg"
import FacebookIcon from "@/assets/svgs/facebook.svg"
import React, { useRef } from "react"
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native"
import Animated from "react-native-reanimated"

type Props = {}

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

const OnboardPagination = ({ activeIndex = 1 }) => (
  <View style={{ gap: 17, flexDirection: "row" }}>
    {new Array(3).fill("").map((_, i) => (
      <View
        key={i}
        style={{
          height: 8,
          width: 8,
          borderRadius: 4,
          backgroundColor: "white",
          opacity: i === activeIndex ? 1 : 0.6,
        }}
      />
    ))}
  </View>
)

const Onboard = (props: Props) => {
  const { updateAuth } = useAuth()
  const { width } = useWindowDimensions()

  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("@/assets/images/bg.png")}
        style={[styles.content, { width }]}
        resizeMode="cover"
      >
        <View style={{ flex: 1 }}>
          <FlatList
            data={onboard}
            renderItem={({ item }) => <OnboardItem {...item} />}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flex: 0.35, paddingHorizontal: 32 }}>
          <OnboardPagination />

          <View style={{ gap: 10, marginTop: 30 }}>
            <Button
              variant="accent"
              onPress={() => {
                updateAuth((prev: any) => ({ ...prev, hasOnboarded: true }))
                router.replace("/")
              }}
              startIcon={<EnterIcon />}
            >
              Continue with E-mail
            </Button>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                gap: 5,
              }}
            >
              <Button
                variant="accent"
                startIcon={<AppleIcon />}
                btnStyle={{
                  flex: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                }}
              >
                Apple
              </Button>
              <Button
                variant="accent"
                startIcon={<GoogleIcon />}
                btnStyle={{
                  flex: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                }}
              >
                Google
              </Button>
              <Button
                variant="accent"
                startIcon={<FacebookIcon />}
                btnStyle={{
                  flex: 1.3,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                }}
              >
                Facebook
              </Button>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#AFB4FF",
                  fontSize: 13,
                }}
              >
                By continuing you agree to our{" "}
              </Text>
              <Button
                variant="text"
                textStyle={{
                  fontSize: 13,
                  color: "#AFB4FF",
                  textDecorationLine: "underline",
                }}
              >
                Terms of Services{" "}
              </Button>
              <Text style={{ color: "#AFB4FF", fontSize: 13 }}>& </Text>
              <Button
                variant="text"
                textStyle={{
                  fontSize: 13,
                  color: "#AFB4FF",
                  textDecorationLine: "underline",
                }}
              >
                Privacy Policy
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingVertical: 32,
    gap: 16,
    overflow: "hidden",
  },
})

export default Onboard
