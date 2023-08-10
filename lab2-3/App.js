import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab2_1 from './screens/Lab2_1';
import Lab2_2 from './screens/Lab2_2';
import Lab3_1 from './screens/Lab3_1';
import Lab3_2 from './screens/Lab3_2';

export default function App() {
  return (
    <Lab3_2/>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
