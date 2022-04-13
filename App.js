import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Platform, TextInput, KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
      <Text style={[styles.textStyle, styles.largeText]}>Paso del Rey</Text>
      <Text style={[styles.textStyle, styles.smallText]}>Light Cloud</Text>
      <Text style={[styles.textStyle, styles.largeText]}>24°</Text>
      <TextInput autoCorrect={false} placeholder={'Search any city'} placeholderTextColor={'white'} style={styles.textInput} clearButtonMode={'always'}/>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color:'white',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
  },
  largeText : {
    fontSize: 44,
  },
  smallText:{
    fontSize: 18
  },
  textInput:{
    backgroundColor: '#666',
    color:'black',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  }

});
