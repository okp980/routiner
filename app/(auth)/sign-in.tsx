import Layout from "@/components/layout/Layout"
import { useAuth } from "@/context/auth"
import { router } from "expo-router"
import React from "react"
import { Button, View, Text } from "react-native"

type Props = {}

const SignIn = (props: Props) => {
  const { updateAuth } = useAuth()
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <Text>Sign in</Text>
        <Button
          onPress={() => {
            updateAuth((prev: any) => ({ ...prev, authenticated: true }))
            router.replace("/")
          }}
          title="Sign in"
        />
      </View>
    </Layout>
  )
}

export default SignIn
