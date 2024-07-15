import { ThemedText, i18n } from "@/components/ThemedText"
import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Layout from "@/components/layout/Layout"
import { appColor } from "@/constants/Colors"
import { useAuth } from "@/context/auth"
import { Link, router } from "expo-router"
import React from "react"
import { View, Text } from "react-native"

type Props = {}

const SignIn = (props: Props) => {
  const { updateAuth } = useAuth()
  return (
    <Layout>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 50 }}>
        <View style={{ flex: 1 }}>
          <Input
            label="e-mail"
            inputProps={{ placeholder: i18n.t("enter-email") }}
          />
          <Input
            label="password"
            inputProps={{ placeholder: i18n.t("enter-password") }}
            password
          />
          <Link href="/forgot-password" style={{ marginBottom: 40 }}>
            <ThemedText weight="medium" style={{ color: appColor.BLACK60 }}>
              i-forgot-my-password
            </ThemedText>
          </Link>
          <Button
            variant="primary"
            onPress={() => {
              updateAuth((prev: any) => ({ ...prev, authenticated: true }))
              router.replace("/")
            }}
          >
            submit
          </Button>
        </View>
        <View style={{ alignItems: "center", marginBottom: 60 }}>
          <Link href="/sign-up">
            <ThemedText weight="medium" style={{ color: appColor.PRIMARY }}>
              dont-have-account
            </ThemedText>
          </Link>
        </View>
      </View>
    </Layout>
  )
}

export default SignIn
