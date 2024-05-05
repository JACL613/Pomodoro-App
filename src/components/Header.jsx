import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const options = ["Regular Break" , "Long Break","Shorter Break" ]

export default function Header({isCurrentTime, setIsCurrentTime , setTime}) {
    function handlePress(index) {
        let newTime = index === 0 ? 25 : index === 1 ? 15 : 5;
        console.log(index);
        setIsCurrentTime(index)
        setTime(newTime * 60)
    }
  return (
    <View style={{flexDirection:"row"}}>
      {
        options.map((item, index) => (
            <TouchableOpacity  key={index} onPress={() => handlePress(index)}
            style={[styles.headerItem, isCurrentTime !== index && {borderColor: 'transparent'}]} >
              <Text>{item}</Text>
            </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  headerItem: {
    width: "33%",
    alignItems: "center",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    marginVertical: 20
  }
})
