import { StyleSheet, Text, View, ViewProps } from "react-native"
import React from "react"
import { ThemedView } from "../ThemedView"
import { appColor } from "@/constants/Colors"

const Card = ({ children, style, ...props }: ViewProps) => {
  return (
    <ThemedView
      lightColor={appColor.WHITE}
      darkColor={"#1c1c23"}
      style={[
        { borderWidth: 0.5, borderColor: appColor.BORDER, borderRadius: 16 },
        style,
      ]}
      {...props}
    >
      {children}
    </ThemedView>
  )
}

export default Card

const styles = StyleSheet.create({})
