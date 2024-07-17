import { Tabs } from "expo-router"
import React from "react"
import { useColorScheme } from "@/hooks/useColorScheme"
import TabBar from "@/components/tabBar/TabBar"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="index" />
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
