import { Platform, SafeAreaView, StatusBar, ViewProps } from "react-native"
import { ThemedView } from "../ThemedView"
import { ReactElement } from "react"
import { useColorScheme } from "@/hooks/useColorScheme.web"

export default function Layout({ style, children, ...props }: ViewProps) {
  const colorScheme = useColorScheme()
  return (
    <ThemedView style={[{ flex: 1 }, style]} {...props}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <StatusBar
          barStyle={colorScheme === "dark" ? "dark-content" : "light-content"}
        />
        {children}
      </SafeAreaView>
    </ThemedView>
  )
}
