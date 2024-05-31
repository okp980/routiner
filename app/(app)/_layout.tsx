import { Redirect, Stack } from "expo-router"
import { useAuth } from "@/context/auth"

export default function AppLayout() {
  const { authenticated, hasOnboarded } = useAuth()
  if (!hasOnboarded) {
    return <Redirect href="/onboard" />
  }
  if (!authenticated) {
    return <Redirect href="/sign-in" />
  }
  return <Stack screenOptions={{ headerShown: false }} />
}
