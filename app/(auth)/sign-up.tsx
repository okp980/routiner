import { ThemedText, i18n } from "@/components/ThemedText"
import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Layout from "@/components/layout/Layout"
import { appColor } from "@/constants/Colors"
import { Link, router } from "expo-router"
import React from "react"
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native"

type Props = {}

const SignIn = (props: Props) => {
  return (
    <Layout>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingTop: 50 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{ flex: 1 }}>
            <Input
              label="name"
              inputProps={{ placeholder: i18n.t("enter-fullname") }}
            />
            <Input
              label="e-mail"
              inputProps={{ placeholder: i18n.t("enter-email") }}
            />
            <Input
              label="password"
              inputProps={{ placeholder: i18n.t("enter-password") }}
              password
            />
            <Input
              label="confirm-password"
              inputProps={{ placeholder: i18n.t("enter-password") }}
              password
            />

            <Button
              variant="primary"
              onPress={() => {
                router.navigate("/choose-gender")
              }}
              btnStyle={{ marginTop: 40, marginBottom: 20 }}
            >
              continue
            </Button>
          </View>
          <View style={{ alignItems: "center", marginBottom: 60 }}>
            <Link href="/sign-in">
              <ThemedText weight="medium" style={{ color: appColor.PRIMARY }}>
                already-have-account
              </ThemedText>
            </Link>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  )
}

export default SignIn
