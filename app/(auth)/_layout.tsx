import { Stack, router } from "expo-router"
import React from "react"
import { TouchableOpacity } from "react-native"
import LeftCaret from "@/assets/svgs/left-caret.svg"
import { ThemedText } from "@/components/ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor"
import { appColor } from "@/constants/Colors"

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
        headerTitle: ({ children }) => (
          <ThemedText size="h5" weight="bold" style={{ marginLeft: 10 }}>
            {children}
          </ThemedText>
        ),
        headerLeft: ({ tintColor }) => (
          <TouchableOpacity
            onPress={router.back}
            style={{
              borderWidth: 1,
              borderRadius: 16,
              borderColor: appColor.BORDER,
              height: 48,
              width: 48,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LeftCaret color={iconColor} />
          </TouchableOpacity>
        ),
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: headerBackgroundColor,
        },
      }}
    >
      <Stack.Screen
        name="onboard"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="sign-in" options={{ title: "continue-with-email" }} />
    </Stack>
  )
}
