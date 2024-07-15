import { Platform, SafeAreaView, StatusBar } from "react-native"
import { ThemedView } from "../ThemedView"
import { ReactElement } from "react"

type Props = {
  children: ReactElement
}

export default function Layout({ children }: Props) {
  return (
    <ThemedView style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <StatusBar barStyle="dark-content" />
        {children}
      </SafeAreaView>
    </ThemedView>
  )
}
