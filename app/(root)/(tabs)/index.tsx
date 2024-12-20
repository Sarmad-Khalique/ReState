import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='text-red-500 font-rubik text-4xl'>Welcome to Restate</Text>
      <Link href="/sign-in" className='text-blue-500 font-rubik text-2xl'>Sign In</Link>
    </View>
  );
}
