import { TouchableOpacity, Image } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { appColor } from "@/constants/Colors"
import { ThemedView } from "../ThemedView"

export default function TabBar({ state, descriptors, navigation }: any) {
  const renderIcon = (
    routeName: "index" | "explore" | "add" | "activity" | "profile",
    isFocused: boolean
  ) => {
    switch (routeName) {
      case "index":
        return (
          <Image
            source={
              isFocused
                ? require("@/assets/images/home-focused.png")
                : require("@/assets/images/home.png")
            }
            height={24}
            width={24}
            resizeMode="contain"
          />
        )
      case "explore":
        return (
          <Image
            source={
              isFocused
                ? require("@/assets/images/explore-focused.png")
                : require("@/assets/images/explore.png")
            }
            height={24}
            width={24}
            resizeMode="contain"
          />
        )
      case "add":
        return (
          <Ionicons
            name="add-circle-sharp"
            size={48}
            color={appColor.PRIMARY}
          />
        )
      case "activity":
        return (
          <Image
            source={
              isFocused
                ? require("@/assets/images/activity-focused.png")
                : require("@/assets/images/activity.png")
            }
            height={24}
            width={24}
            resizeMode="contain"
          />
        )
      case "profile":
        return (
          <Image
            source={
              isFocused
                ? require("@/assets/images/profile-focused.png")
                : require("@/assets/images/profile.png")
            }
            height={24}
            width={24}
            resizeMode="contain"
          />
        )

      default:
        return
    }
  }

  return (
    <ThemedView
      lightColor={appColor.WHITE}
      style={{
        flexDirection: "row",
        height: 64,
        // borderRadius: 64,
        borderTopColor: appColor.BORDER,
        borderTopWidth: 1,
        // marginHorizontal: 20,
        // marginBottom: 20,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            key={index}
          >
            {renderIcon(route.name, isFocused)}
          </TouchableOpacity>
        )
      })}
    </ThemedView>
  )
}
