import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  console.log({login,password});

  function handlePress() {
  if (login === 'admin' && password === 'admin') {
    return alert('Login successful!');
  }
}

  return (
    <View style={styles.container} >
      <View style={styles.WrapperLogin}>
      <TextInput style={styles.input} placeholder="Login" value={login} onChangeText={setLogin} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
      </View>
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
    padding: 20,
  },
  WrapperLogin:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '100%'
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%'
  }
});
