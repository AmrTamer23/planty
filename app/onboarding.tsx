import { useOnBoardingStore } from "../stores/onboarding-store";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  Pressable,
  StatusBar,
  useWindowDimensions,
  View,
  Text,
} from "react-native";

export default function Onboarding() {
  const { width } = useWindowDimensions();
  const imageSize = width * 0.9;
  const toggleOnBoarding = useOnBoardingStore((s) => s.toggleHasOnboarded);
  const router = useRouter();
  const handleFinishOnBoarding = () => {
    toggleOnBoarding();

    router.replace("/");
  };
  return (
    <View className="flex-1 items-center justify-evenly py-20 h-full bg-[#6a994e]">
      <View className="items-center justify-center gap-1">
        <Text className="tracking-widest font-bold text-4xl text-zinc-50">
          Planty
        </Text>
        <Text className="text-lg text-zinc-100">
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <Image
        source={require("@/assets/images/plantly.png")}
        alt="Planty"
        style={{ width: imageSize, height: imageSize }}
      />
      <Pressable
        className="px-4 py-2 rounded-md bg-zinc-800 active:bg-zinc-700 "
        onPress={handleFinishOnBoarding}
      >
        <Text className="text-white text-xl">Get Started</Text>
      </Pressable>
      <StatusBar backgroundColor="#6a994e" />
    </View>
  );
}
