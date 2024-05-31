import { useAuth } from "@/context/auth"
import { router } from "expo-router"
import React from "react"
import { Button, Text, View } from "react-native"

type Props = {}

const Onboard = (props: Props) => {
  const { updateAuth } = useAuth()
  return (
    <View>
      <Text>Onboard</Text>
      <Button
        onPress={() => {
          updateAuth((prev: any) => ({ ...prev, hasOnboarded: true }))
          router.replace("/")
        }}
        title="Onboard"
      />
    </View>
  )
}

export default Onboard
