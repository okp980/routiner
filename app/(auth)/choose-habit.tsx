import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import Layout from "@/components/layout/Layout"
import { ThemedText } from "@/components/ThemedText"
import Button from "@/components/button/Button"
import { router } from "expo-router"
import { habits } from "@/lib/data"
import Card from "@/components/card/Card"

type Props = {}

const ChooseHabit = (props: Props) => {
  return (
    <Layout style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
      <ThemedText weight="medium" size="b1" style={{ marginBottom: 5 }}>
        choose-your-first-habits
      </ThemedText>
      <ThemedText style={{ marginBottom: 20 }}>
        you-may-add-more-habits-later
      </ThemedText>
      <View style={{ marginBottom: 50, flex: 1 }}>
        <FlatList
          data={habits}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          renderItem={({ item: habit, index }) => (
            <TouchableOpacity
              style={{
                flex: 1,
                marginRight: index % 2 === 0 ? 10 : 0,
                marginBottom: 10,
              }}
            >
              <Card
                style={{
                  height: 134,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 15,
                }}
              >
                <Image
                  source={habit.icon}
                  width={39}
                  height={48}
                  resizeMode="contain"
                />
                <ThemedText
                  weight="medium"
                  style={{ textTransform: "capitalize" }}
                >
                  {habit.name}
                </ThemedText>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Button
          variant="primary"
          onPress={() => {
            router.replace("/")
          }}
          btnStyle={{ marginTop: 40, marginBottom: 20 }}
        >
          submit
        </Button>
      </View>
    </Layout>
  )
}

export default ChooseHabit

const styles = StyleSheet.create({})
