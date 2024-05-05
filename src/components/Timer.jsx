import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Audio} from 'expo-av'


export default function Timer({time , isWorking, setTime ,setIsWorking, isCurrentTime}) {
    const formattedTime = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`
    
    useEffect(() => {
      let interval = null
      if (isWorking === false) {
        interval = setInterval(() => {
          setTime(time - 1)
        }, 1000)
      }else{
        clearInterval(interval)
      }

      if(time === 0) {
        setIsWorking(true)
        setTime(isCurrentTime.length === 0 ? 1500: isCurrentTime.length === 1 ? 900 : 300)
        playSound()
      }
      return () => clearInterval(interval)
    }, [isWorking, time])

    async function playSound () {
      const {sound} = await Audio.Sound.createAsync(require('../assets/Audio/finish.wav'))
      await sound.playAsync()
    }
  return (
    <View style={styles.containerTime}>
        <Text style={styles.time}>
          {formattedTime}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerTime:{
        flex: 0.3,
        backgroundColor: "#F2F2F2",
        justifyContent: "center",
        padding: 15,
        borderRadius: 15
    },
    time: {
        fontSize:80,
        fontWeight: "bold",
        textAlign: "center",
    }
})