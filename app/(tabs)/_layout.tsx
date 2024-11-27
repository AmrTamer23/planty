import { AntDesign, Entypo } from "@expo/vector-icons";
import { Link, Redirect, Tabs, useRouter } from "expo-router";
import { useOnBoardingStore } from "../../stores/onboarding-store";
import { Pressable } from "react-native";

export default function Layout() {
  const onBoarded = useOnBoardingStore((s) => s.hasFinishedOnboarding);

  if (onBoarded === false) {
    return <Redirect href="/onboarding" />;
  }

  const router = useRouter();

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
          headerRight: () => (
            <Link asChild href={"/new-plant"}>
              <Pressable hitSlop={10}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color="#008000"
                  className="mr-4"
                />
              </Pressable>
            </Link>
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
