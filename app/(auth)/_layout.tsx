import { Stack, router } from "expo-router"
import React from "react"
import { TouchableOpacity } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor"
import { appColor } from "@/constants/Colors"
import Header from "@/components/header/Header"

type Props = {}

export default function AuthLayout({}: Props) {
  const headerBackgroundColor = useThemeColor(
    { light: appColor.WHITE, dark: appColor.BLACK },
    "background"
  )
  const iconColor = useThemeColor({}, "icon")
  return (
    <Stack
      screenOptions={{
        header: (props: any) => <Header {...props} />,
      }}
    >
      <Stack.Screen
        name="onboard"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="sign-in" options={{ title: "continue-with-email" }} />
      <Stack.Screen name="sign-up" options={{ title: "create-account" }} />
    </Stack>
  )
}
