import { AntDesign, Entypo } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useAtom } from "jotai";
import { onBoardingAtom } from "@/atoms/onboarding-atom";

export default function Layout() {
  const [onboarded] = useAtom(onBoardingAtom);
  if (!onboarded) return <Redirect href="/onboarding" />;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#008000",
        tabBarInactiveTintColor: "#ccc",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#ccc",
          borderTopWidth: 1,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
