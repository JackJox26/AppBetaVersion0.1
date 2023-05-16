import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image} from 'react-native';
import { useState, useEffect } from 'react';


export default function App() {

  const [img,setImg] = useState('')

  const getCat = () =>
  {
    // fetch('https://loremflickr.com/320/240')
    fetch('https://aws.random.cat/meow')

    .then((res) =>
    {
      return res.json()
    })
    .then((data) => 
    {
      console.log(data)

      setImg(data.file)
      console.log(img);
    })
  }
  useEffect(()=> {
    getCat()
  }, [])

  return (
    <View style={styles.container}>
    <Image source = {{uri: img}}
            style={styles.img}
    />
      <Button
        onPress={getCat}
        title="Avoir Nouveau Chat"
        color="#f00"
        accessibilityLabel="Learn more about this purple button"
      />
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
  },
  img:
  {
    width : '80%',
    height: '65%',
    marginBottom : '5%'
  }
});



import {StyleSheet, Text, Button,View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

const tab = createBottomTabNavigator();

function AccueilScreen()
{
  
  return (
    <View style = {styles.container}>
      <Text> Avoir un chat</Text>
      <Button
        onPress={'getCat'}
        title="Avoir Nouveau Chat"
        color="#f00"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  )
}
function ParametreScreen()
{

  return (
    <View style = {styles.container}>
      <Text> Paramètre</Text>
    </View>
  )
}



export default function App() {
  const [img,setImg] = useState('')
  const getcat = () =>
  {
      // fetch('https://loremflickr.com/320/240')
      fetch('https://aws.random.cat/meow')
  
      .then((res) =>
      {
        return res.json()
      })
      .then((data) => 
      {
        console.log(data)
    
        setImg(data.file)
        console.log(img);
      })
  }


  useEffect(()=> {
    getCat()
  }, [])

return(
  <NavigationContainer>
    <tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name== 'Accueil')
          {
            iconName = 'home'
          }
          else if (route.name == 'Parametre')
          {
            iconName = 'settings'
          }
          return <Ionicons name = {iconName} size = {25} color ='black' />
        }
      })}
    >

      
      <tab.Screen name='Accueil' component = { AccueilScreen} />
      <tab.Screen name='Parametre' component={ ParametreScreen} />

    </tab.Navigator>
  </NavigationContainer>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:
  {
    width : '80%',
    height: '65%',
    marginBottom : '5%'
  }
});
