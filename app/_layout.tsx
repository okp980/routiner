import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"
import { Slot } from "expo-router"
import { I18n } from "i18n-js"
import { getLocales } from "expo-localization"

import { useColorScheme } from "@/hooks/useColorScheme"
import { AuthProvider } from "@/context/auth"
import translations from "@/i18n/translations"
import { AppState, Platform } from "react-native"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const i18n = new I18n(translations)
  i18n.locale = getLocales()[0].languageCode ?? "en"
  i18n.enableFallback = true

  if (Platform.OS === "android") {
  }

  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  useEffect(() => {
    const subscription = AppState.addEventListener("change", () => {
      if (Platform.OS === "android" && getLocales()[0].languageCode) {
        i18n.locale = getLocales()[0].languageCode!
      }
    })
    return subscription.remove()
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Slot />
      </ThemeProvider>
    </AuthProvider>
  )
}
