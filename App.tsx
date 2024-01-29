import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={(text) => setName(text)}
      />
      <View>
        <Text>Hello! I am {name}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 60,
    margin: 16,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'gray',
    width: '90%',
    color: 'black',
  },
})
