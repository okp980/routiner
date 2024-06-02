import { Text, View } from "react-native"

import Button from "../button/Button"
import { useAuth } from "@/context/auth"
import { router } from "expo-router"
import EnterIcon from "@/assets/svgs/enter.svg"
import AppleIcon from "@/assets/svgs/apple.svg"
import GoogleIcon from "@/assets/svgs/google.svg"
import FacebookIcon from "@/assets/svgs/facebook.svg"

export function Navs() {
  const { updateAuth } = useAuth()

  return (
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
  )
}
