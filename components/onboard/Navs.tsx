import { Text, View } from "react-native"

import Button from "../shared/button/Button"
import { useAuth } from "@/context/auth"
import { Link, router } from "expo-router"
import EnterIcon from "@/assets/svgs/enter.svg"
import AppleIcon from "@/assets/svgs/apple.svg"
import GoogleIcon from "@/assets/svgs/google.svg"
import FacebookIcon from "@/assets/svgs/facebook.svg"
import { ThemedText } from "../shared/ThemedText"

export default function Navs() {
  const { updateAuth } = useAuth()

  return (
    <View style={{ gap: 15, marginTop: 30 }}>
      <Button
        variant="accent"
        onPress={() => {
          //   updateAuth((prev: any) => ({ ...prev, hasOnboarded: true }))
          router.push("/sign-in")
        }}
        startIcon={<EnterIcon />}
      >
        continue-with-email
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
          apple
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
          google
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
          facebook
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          columnGap: 3,
        }}
      >
        <ThemedText
          weight="medium"
          size="small"
          style={{
            color: "#AFB4FF",
          }}
        >
          by-continuing-you-agree-to-our
        </ThemedText>
        <Link href={"/terms-of-service"}>
          <ThemedText
            weight="medium"
            size="small"
            style={{
              color: "#AFB4FF",
              textDecorationLine: "underline",
            }}
          >
            terms-of-service
          </ThemedText>
        </Link>

        <Text style={{ color: "#AFB4FF", fontSize: 12 }}>&</Text>
        <Link href={"/privacy-policy"}>
          <ThemedText
            weight="medium"
            size="small"
            style={{
              color: "#AFB4FF",
              textDecorationLine: "underline",
            }}
          >
            privacy-policy
          </ThemedText>
        </Link>
      </View>
    </View>
  )
}
