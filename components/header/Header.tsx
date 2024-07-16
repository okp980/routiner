import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { router } from "expo-router"
import { appColor } from "@/constants/Colors"
import { useThemeColor } from "@/hooks/useThemeColor"
import LeftCaret from "@/assets/svgs/left-caret.svg"
import { ThemedText } from "../ThemedText"
import { NavigationProp, Route } from "@react-navigation/native"
import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types"
type Props = {
  navigation: NavigationProp<any>
  options: NativeStackNavigationOptions
  route: Route<string>
  back?: { title: string } | undefined
}
const Header = ({ navigation, options, route }: Props) => {
  const backgroundColor = useThemeColor(
    { light: appColor.WHITE, dark: appColor.BLACK },
    "background"
  )
  const iconColor = useThemeColor({}, "icon")
  return (
    <View
      style={{
        backgroundColor,
        height: 135,
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.7,
        borderBottomColor: appColor.BORDER,
        gap: 10,
      }}
    >
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
        <LeftCaret color={iconColor} />
      </TouchableOpacity>
      <ThemedText size="h5" weight="bold">
        {options.title}
      </ThemedText>
    </View>
  )
}

export default Header
