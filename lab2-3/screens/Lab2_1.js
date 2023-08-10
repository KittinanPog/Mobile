import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button, Alert} from 'react-native';

export default function Lab2_1() {
  return (
    
    <View style={styles.container}>
        
        <View style={[styles.container, {flex:6}]}>
        <Image
        style={styles.tinyLogo}
        source={require('../assets/IT_Logo.jpg')}/>
      <Text style={styles.titleText}>คณะเทคโนโลยีสารสนเทศ</Text>
      <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={[{flex:0.4}, {width:200}]}>
        <Button 
        title="PROGRAMS"
        onPress={() => Alert.alert('Yeeeeeeeeeee')}
      />
      </View>
      <View style={[{flex:0.5}, {width:200}]}>
        <Button
        title="ABOUT US"
        onPress={() => Alert.alert('Yaaaaaaaaaaaaaaa')}
      />
      </View>
    </View>
    

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    resizeMode: 'stretch',
    width: 100,
    height: 100,
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
  
});
