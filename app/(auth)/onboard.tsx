import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  View,
  useWindowDimensions,
} from "react-native"

import { onboard } from "@/lib/data"
import OnboardItem from "@/components/onboard/OnboardItem"
import OnboardPagination from "@/components/onboard/OnboardPagination"
import Navs from "@/components/onboard/Navs"

type Props = {}

const Onboard = (props: Props) => {
  const { width } = useWindowDimensions()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const updateCurrentSlideIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / width)
    setCurrentSlideIndex(currentIndex)
  }

  return (
    <View style={[styles.container, { width }]}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("@/assets/images/bg.png")}
        style={[styles.content, { width }]}
        resizeMode="cover"
      >
        <View style={{ flex: 1 }}>
          <FlatList
            data={onboard}
            renderItem={({ item }) => <OnboardItem {...item} />}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={updateCurrentSlideIndex}
          />
        </View>
        <View style={styles.bottomContent}>
          <OnboardPagination activeIndex={currentSlideIndex} />
          <Navs />
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingVertical: 32,
    gap: 16,
    overflow: "hidden",
  },
  bottomContent: { flex: 0.35, paddingHorizontal: 20 },
})

export default Onboard
