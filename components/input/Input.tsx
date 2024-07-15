import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { FieldError } from "react-hook-form"
import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import Feather from "@expo/vector-icons/Feather"
import { useThemeColor } from "@/hooks/useThemeColor"
import { appColor } from "@/constants/Colors"
import { ThemedText } from "../ThemedText"

type InputProps = {
  inputProps: TextInputProps
  label?: string
  containerStyle?: StyleProp<ViewStyle>
  error?: FieldError
  password?: boolean
  search?: boolean
  inputFieldStyle?: StyleProp<ViewStyle>
  onFocus?: Function
  labelStyle?: StyleProp<TextStyle>
}

const Input = ({
  inputProps: { style: inputStyle, ...inputProps },
  label,
  containerStyle,
  error,
  password,
  search,
  inputFieldStyle,
  onFocus,
  labelStyle,
}: InputProps) => {
  const [hidden, setHidden] = useState(true)
  const [focused, setFocused] = useState(false)
  const iconColor = useThemeColor({}, "icon")

  return (
    <View style={containerStyle}>
      <View style={styles.top}>
        {label && (
          <ThemedText
            size="small"
            weight="bold"
            style={{ textTransform: "uppercase" }}
          >
            {label}
          </ThemedText>
        )}
        {password && (
          <TouchableOpacity
            style={styles.hideBtn}
            onPress={() => setHidden((prev) => !prev)}
          >
            <Ionicons
              name={hidden ? "eye-off" : "eye"}
              size={18}
              color={iconColor}
            />
            <ThemedText style={styles.label}>
              {hidden ? "show" : "hide"}
            </ThemedText>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={[
          styles.inputOuterContainer,
          !error && focused ? styles.focusedBorder : undefined,
          error && !focused ? styles.errorBorder : undefined,
        ]}
      >
        <View style={[styles.inputInnerContainer, inputFieldStyle]}>
          {search && (
            <Feather
              name="search"
              size={20}
              color={iconColor}
              style={{ marginLeft: 10 }}
            />
          )}
          <TextInput
            style={[styles.inputStyle, inputStyle, { color: iconColor }]}
            cursorColor={appColor.BLACK}
            placeholderTextColor={appColor.BLACK20}
            onFocus={() => {
              setFocused(true)
              onFocus && onFocus()
            }}
            onBlur={() => setFocused(false)}
            {...{ secureTextEntry: password ? hidden : undefined }}
            {...inputProps}
          />
          {focused && (
            <TouchableOpacity
              style={styles.clearBtn}
              onPress={() => inputProps?.onChangeText!("")}
            >
              <FontAwesome5 name="times" size={13} color={appColor.BLACK} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* <ErrorMessage {...validationProps} error={error} focused={focused} /> */}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  top: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  label: {
    fontSize: 12,
    fontFamily: "AirbnbCereal-Medium",
    textTransform: "uppercase",
  },
  hideBtn: { flexDirection: "row", alignItems: "center", gap: 5 },
  inputOuterContainer: {
    borderBottomWidth: 2,
    backgroundColor: "transparent",
    borderBottomColor: appColor.BORDER,
    marginBottom: 20,
  },
  inputInnerContainer: {
    flexDirection: "row",
    padding: 4,
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    paddingRight: 14,
    paddingVertical: 8,
    fontSize: 18,
    fontFamily: "AirbnbCereal-Medium",
  },
  clearBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 22,
    width: 22,
    borderRadius: 12,
    backgroundColor: appColor.BLACK20,
    marginRight: 10,
  },
  errorBorder: {
    borderBottomColor: appColor.RED,
  },
  focusedBorder: {
    borderBottomColor: appColor.GREEN,
  },
})
