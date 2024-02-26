import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button, Alert} from 'react-native';
// import {useFonts, Inter_100Thin , Inter_600SemiBold} from '@expo-google-fonts/inter'
import {useFonts, Roboto_300Light , Roboto_700Bold} from '@expo-google-fonts/roboto'

export default function App() {
  // let [fontsLoaded, fontError] = useFonts({
  //   Inter_100Thin,
  //   Inter_600SemiBold
  // });
  let [fontsLoaded, fontError] = useFonts({
   Roboto_300Light, 
   Roboto_700Bold
  });
  const [Verification , setVerefication] = useState(false)
  const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => setVerefication(!Verification),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => setVerefication(!Verification)},
  ]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro</Text>
      <Button title='Hello' onPress={createTwoButtonAlert} />
      <Text>{Verification ? 'Vereficado' : 'No Vereficado'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
   fontSize:24,
   fontFamily: 'Roboto_700Bold|',
  }
});
