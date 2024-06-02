import { onboard } from "@/lib/data"
import { View } from "react-native"

const OnboardPagination = ({ activeIndex }: { activeIndex: number }) => (
  <View style={{ gap: 17, flexDirection: "row" }}>
    {onboard.map((_, i) => (
      <View
        key={i}
        style={{
          height: 8,
          width: 8,
          borderRadius: 4,
          backgroundColor: "white",
          opacity: i === activeIndex ? 1 : 0.6,
        }}
      />
    ))}
  </View>
)
export default OnboardPagination
