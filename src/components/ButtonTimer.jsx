import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {Audio} from 'expo-av'

export default function ButtonTimer({isWorking, setIsWorking}) {

  const handlePress = () => {
    playSound()
    setIsWorking(!isWorking)
  }
  async function playSound () {
    const {sound} = await Audio.Sound.createAsync(require('../assets/Audio/Click.wav'))
    await sound.playAsync()
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.containerButton}>
        <Text style={styles.textButton}>{isWorking?'Start' : 'Stop'}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    containerButton: {
        alignItems: 'center',
        backgroundColor: "#333333",
        borderRadius: 15,
        padding: 15, 
        marginTop: 15,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
})
