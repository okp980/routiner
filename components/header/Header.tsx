import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { router } from "expo-router"
import { appColor } from "@/constants/Colors"
import { useThemeColor } from "@/hooks/useThemeColor"
import LeftCaret from "@/assets/svgs/left-caret.svg"
import { ThemedText } from "../ThemedText"
import { NavigationProp, Route } from "@react-navigation/native"
import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types"
import { ThemedView } from "../ThemedView"
type Props = {
  navigation: NavigationProp<any>
  options: NativeStackNavigationOptions & { headerShadowVisible: boolean }
  route: Route<string>
  back?: { title: string } | undefined
}
const Header = ({
  navigation,
  options: { headerShadowVisible = true, ...options },
  route,
}: Props) => {
  const iconColor = useThemeColor({}, "icon")
  return (
    <ThemedView
      lightColor={appColor.WHITE}
      style={[
        {
          height: 135,
          paddingTop: 50,
          paddingHorizontal: 20,
          paddingBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        },
        headerShadowVisible
          ? { borderBottomWidth: 0.7, borderBottomColor: appColor.BORDER }
          : undefined,
      ]}
    >
      {options.headerLeft ? (
        <options.headerLeft />
      ) : (
        <TouchableOpacity
          onPress={router.back}
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: appColor.BORDER,
            height: 48,
            width: 48,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LeftCaret fill={iconColor} />
        </TouchableOpacity>
      )}
      {options.title && (
        <ThemedText size="h5" weight="bold">
          {options.title}
        </ThemedText>
      )}
      {options.headerRight && <options.headerRight />}
    </ThemedView>
  )
}

export default Header
