import { useAuth } from "@/context/auth"
import { router } from "expo-router"
import React from "react"
import { Button, Text, View } from "react-native"

type Props = {}

const SignIn = (props: Props) => {
  const { updateAuth } = useAuth()
  return (
    <View>
      <Text>Sign in</Text>
      <Button
        onPress={() => {
          updateAuth((prev: any) => ({ ...prev, authenticated: true }))
          router.replace("/")
        }}
        title="Sign in"
      />
    </View>
  )
}

export default SignIn
