import { Stack } from "expo-router"
import React from "react"

type Props = {}

export default function AuthLayout({}: Props) {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="onboard" />
    </Stack>
  )
}
