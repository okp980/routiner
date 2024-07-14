import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  StyleSheet,
  StyleProp,
} from "react-native"
import React from "react"
import { FieldError } from "react-hook-form"
import { ThemedText } from "../ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor"

type Props = {
  lightColor?: string
  darkColor?: string
  label?: string
  error?: string | FieldError
  contentContainerStyle?: StyleProp<ViewStyle>
} & TextInputProps

const Input = ({
  label,
  error,
  contentContainerStyle,
  lightColor,
  darkColor,
  ...props
}: Props) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")

  return (
    <View style={[contentContainerStyle]}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: color,
          position: "relative",
          paddingHorizontal: 12,
          paddingVertical: 20,
        }}
      >
        {label && (
          <View
            style={{
              position: "absolute",
              top: -10,
              left: 6,
            }}
          >
            <ThemedText type="small">{label}</ThemedText>
          </View>
        )}
        <TextInput
          {...props}
          style={{ color: color, fontSize: 16, padding: 0 }}
        />
        
      </View>
      {error && (
        <ThemedText type="tiny" style={styles.error}>
          {error as string}
        </ThemedText>
      )}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  error: {
    marginTop: 4,
    color: "red",
  },
})
