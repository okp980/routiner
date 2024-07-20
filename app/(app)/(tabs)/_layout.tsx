import { Tabs } from "expo-router"
import React from "react"
import { useColorScheme } from "@/hooks/useColorScheme"
import TabBar from "@/components/shared/tabBar/TabBar"
import Header from "@/components/shared/header/Header"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: (props: any) => <Header {...props} />,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ headerShadowVisible: false }} />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen name="add" />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Your profile",
        }}
      />
    </Tabs>
  )
}
