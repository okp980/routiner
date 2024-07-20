import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { ThemedView } from "../shared/ThemedView"
import { appColor } from "@/constants/Colors"
import { ThemedText } from "../shared/ThemedText"
import CustomSegmentedControl from "../shared/customSegmentedControl/CustomSegmentedControl"

export default function Heading() {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <ThemedView
      lightColor={appColor.WHITE}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: appColor.BORDER,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <View style={{ flex: 1 }}>
          <ThemedText size="b1" weight="medium" values={{ name: "Joe 👋" }}>
            greetings
          </ThemedText>
          <ThemedText
            style={{ color: appColor.BLACK40, marginTop: 5, marginBottom: 10 }}
          >
            lets-make-habits-together
          </ThemedText>
        </View>
        <ThemedView
          lightColor="#DDF2FC"
          style={{
            height: 48,
            width: 48,
            borderRadius: 48 / 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22 }}>😇</Text>
        </ThemedView>
      </View>
      <CustomSegmentedControl
        tabs={["Today", "Clubs"]}
        currentIndex={tabIndex}
        onChange={(index) => setTabIndex(index)}
        containerStyle={{ marginBottom: 20 }}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({})
