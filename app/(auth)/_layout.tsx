import { Stack } from "expo-router"
import React from "react"

type Props = {}

export default function AuthLayout({}: Props) {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="onboard" />
    </Stack>
  )
}
