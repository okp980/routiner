import { StyleSheet, Text, View } from "react-native"
import React from "react"
import Heading from "./Heading"
import Body from "./Body"

export default function () {
  return (
    <View style={{ flex: 1 }}>
      <Heading />
      <Body />
    </View>
  )
}

const styles = StyleSheet.create({})
