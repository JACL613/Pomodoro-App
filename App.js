import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  Platform,
} from "react-native";
// import {useFonts, Inter_100Thin , Inter_600SemiBold} from '@expo-google-fonts/inter'
import {
  useFonts,
  Roboto_300Light,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import ButtonTimer from "./src/components/ButtonTimer";

export default function App() {
  // let [fontsLoaded, fontError] = useFonts({
  //   Inter_100Thin,
  //   Inter_600SemiBold
  // });
  let [fontsLoaded, fontError] = useFonts({
    Roboto_300Light,
    Roboto_700Bold,
  });
  const colors = ["#0C359E", "#FA7070", "#FDFFAB"];

  const [isWorking, setIsWotking] = useState(true);
  const [time, setTime] = useState(25 * 60);
  const [isCurrentTime, setIsCurrentTime] = useState(
    "Regular" | "Short" | "Long"
  );
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[isCurrentTime] }]}
    >
      <View
        style={{
          paddingTop: Platform.OS === "android" && 30,
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.title}>Pomodoro</Text>
        <Header
          isCurrentTime={isCurrentTime}
          setIsCurrentTime={setIsCurrentTime}
          setTime={setTime}
        />
        <Timer
          time={time}
          setTime={setTime}
          isWorking={isWorking}
          setIsWorking={setIsWotking}
          isCurrentTime={isCurrentTime}
        />
        <ButtonTimer isWorking={isWorking} setIsWorking={setIsWotking} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
  },
});
