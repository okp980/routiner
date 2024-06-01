import { Text, type TextProps, StyleSheet } from "react-native"
import { I18n } from "i18n-js"

import { useThemeColor } from "@/hooks/useThemeColor"
import translations from "@/i18n/translations"

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  type?: "default" | "large" | "title" | "defaultSemiBold" | "subtitle" | "link"
}

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  children,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")
  const i18n = new I18n(translations)

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "large" ? styles.large : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    >
      {i18n.t(children as unknown as any)}
    </Text>
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },

  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  large: {
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
})
