import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';



export default function Lab2_2() {
  return (
    
    <View style={styles.container}>
        
        <View style={styles.bar}>
        <Image
        style={styles.tinyLogo}
        source={require('../assets/IT_Logo.jpg')}/>
        <Text style={styles.titleText}>Programs</Text>
        </View>
        
        <ScrollView style={styles.event}>
            <View style={styles.textcss}>
        <Image
        source={require('../assets/course-bach-it.jpg')}/>
        <TouchableOpacity style={styles.button}>
        <Text >Information Technology</Text>
        </TouchableOpacity>
        <Image
        source={require('../assets/course-bach-dsba.jpg')}/>
        <TouchableOpacity style={styles.button}>
        <Text >Data Science and Business Analytics</Text>
        </TouchableOpacity>
        <Image
        source={require('../assets/course-bach-bit.jpg')}/>
        <TouchableOpacity style={styles.button}>
        <Text >Business Information Technology</Text>
        <Text >(International Program)</Text>
        </TouchableOpacity>
        <Image
        source={require('../assets/course-bach-ait.jpg')}/>
        <TouchableOpacity style={styles.button}>
            <Text >Artificial Intelligence Technology</Text>
            </TouchableOpacity>
        <Text ></Text>
        <Text ></Text>
        <Text ></Text>
        <Text ></Text>
        
        </View>
        </ScrollView>
        
    </View>
    

  );
}


const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 80,
    paddingTop: 15,
  },
  tinyLogo: {
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    margin: 20,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000080',
    marginLeft: 50,
  },
  container: {
    backgroundColor: '#DCDCDC',
  },
  event: {
    
    marginTop: 10,
  },
  textcss: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  
});
