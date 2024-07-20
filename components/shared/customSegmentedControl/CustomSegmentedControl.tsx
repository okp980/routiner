import React from "react"
import SegmentedControl, {
  SegmentedControlProps,
} from "@newagebel/react-native-segmented-control"
import { appColor } from "@/constants/Colors"

const CustomSegmentedControl = ({
  tabs,
  currentIndex,
  onChange,
  containerStyle,
}: Pick<
  SegmentedControlProps,
  "tabs" | "currentIndex" | "onChange" | "containerStyle"
>) => {
  return (
    <SegmentedControl
      tabs={tabs}
      currentIndex={currentIndex}
      containerStyle={[
        {
          borderRadius: 16,
          height: 32,
        },
        ,
        containerStyle,
      ]}
      onChange={onChange}
      textStyle={{
        fontFamily: "AirbnbCereal-Medium",
        fontSize: 14,
      }}
      segmentedControlBackgroundColor={appColor.BLACK10}
      activeSegmentBackgroundColor={appColor.WHITE}
      textColor={appColor.BLACK}
      activeTextColor={appColor.PRIMARY}
      paddingVertical={0}
      tileStyle={{ borderRadius: 16 }}
      shadowStyle={{
        shadowColor: "transparent",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      }}
    />
  )
}

export default CustomSegmentedControl
