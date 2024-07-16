import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import React from "react"
import Card from "@/components/card/Card"
import { ThemedText } from "@/components/ThemedText"
import Layout from "@/components/layout/Layout"
import Button from "@/components/button/Button"
import { router } from "expo-router"

const ChooseGender = () => {
  return (
    <Layout
      style={{ paddingHorizontal: 20, paddingBottom: 40, paddingTop: 40 }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
          <TouchableOpacity style={{ flex: 1 }}>
            <Card
              style={{
                height: 134,
                alignItems: "center",
                justifyContent: "center",
                gap: 15,
              }}
            >
              <Image
                source={require("@/assets/images/male.png")}
                width={39}
                height={48}
                resizeMode="contain"
              />
              <ThemedText
                weight="medium"
                style={{ textTransform: "capitalize" }}
              >
                male
              </ThemedText>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }}>
            <Card
              style={{
                height: 134,
                alignItems: "center",
                justifyContent: "center",
                gap: 15,
              }}
            >
              <Image
                source={require("@/assets/images/female.png")}
                width={40}
                height={48}
                resizeMode="contain"
              />
              <ThemedText
                weight="medium"
                style={{ textTransform: "capitalize" }}
              >
                female
              </ThemedText>
            </Card>
          </TouchableOpacity>
        </View>
        <View>
          <Button
            variant="primary"
            onPress={() => {
              router.navigate("/choose-habit")
            }}
            btnStyle={{ marginTop: 40, marginBottom: 20 }}
          >
            continue
          </Button>
        </View>
      </View>
    </Layout>
  )
}

export default ChooseGender

const styles = StyleSheet.create({})
