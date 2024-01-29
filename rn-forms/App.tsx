import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Switch,
  TextInput,
} from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [isCool, setIsCool] = useState(false)
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TextInput
          value={name}
          style={styles.input}
          onChangeText={(text) => setName(text)}
          placeholder='John Doe'
          autoCorrect={false}
        />
        <TextInput
          value={bio}
          style={styles.inputMulti}
          onChangeText={(text) => setBio(text)}
          placeholder='I am blah blah blah'
          multiline
        />
        <View>
          <Text>Hello! I am {name}</Text>
          <Text>{bio}</Text>
          <View>
            <Text>Are you cool?</Text>
            <Switch value={isCool} onValueChange={() => setIsCool(!isCool)} />
            {isCool ? (
              <Text> You are cool </Text>
            ) : (
              <Text> You are not cool </Text>
            )}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
  inputMulti: {
    display: 'flex',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    alignContent: 'flex-start',
    minHeight: 150,
    margin: 16,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'gray',
    width: '90%',
    color: 'black',
  },
})
