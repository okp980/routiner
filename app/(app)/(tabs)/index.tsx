import Home from "@/components/home"
import { appColor } from "@/constants/Colors"
import { useThemeColor } from "@/hooks/useThemeColor"
import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { TouchableOpacity } from "react-native"
import Calender from "@/assets/svgs/calender.svg"
import Notification from "@/assets/svgs/notification.svg"

export default function HomeScreen() {
  const navigation = useNavigation()
  const iconColor = useThemeColor({}, "icon")

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {}}
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
          <Calender fill={iconColor} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {}}
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
          <Notification fill={iconColor} />
        </TouchableOpacity>
      ),
    })
  }, [])
  return <Home />
}
