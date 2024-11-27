import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

export default function NewScreen() {
  const [name, setName] = useState("");
  const [wateringFreq, setWateringFreq] = useState<number | null>();
  const { width } = useWindowDimensions();
  const imageSize = width * 0.7;
  return (
    <KeyboardAwareScrollView>
      <View className=" justify-center items-center mt-20">
        <Image
          source={require("@/assets/images/plantly.png")}
          alt="Planty"
          style={{ width: imageSize, height: imageSize }}
        />
        <View className="w-full max-w-[70%] gap-6">
          <View className="gap-2">
            <Text className="text-xl">Name</Text>
            <TextInput
              className="border-2 border-zinc-300 rounded-md p-2 text-lg"
              placeholder="Plant Name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View className="gap-2">
            <Text className="text-xl">Watering Freq (every x days)</Text>
            <TextInput
              className="border-2 border-zinc-300 rounded-md p-2 text-lg "
              placeholder="7"
              keyboardType="decimal-pad"
              value={String(wateringFreq ?? "")}
              onChangeText={(text) => setWateringFreq(Number(text))}
            />
          </View>
          <Pressable className="bg-[#3BB365] px-4 py-2 rounded-md items-center justify-center">
            <Text className="text-xl text-zinc-100 font-bold">Add Plant </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
