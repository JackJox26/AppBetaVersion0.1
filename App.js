import {StyleSheet, Text, Button,View, Image,SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react';
import { useFonts } from 'expo-font';
import {Audio} from 'expo-av';

const tab = createBottomTabNavigator();

function Happy()
{
  const [img,setImg] = useState('https://purr.objects-us-east-1.dream.io/i/F5iJY.jpg')
    const getCat = () =>
  {
      fetch('https://aws.random.cat/meow')

      .then((res) =>
      {
        return res.json()
      })
      .then((data) => 
      {
        console.log(data)
  
        setImg(data.file)
        // console.log(img);
      })
  }
  useEffect(()=> {
    getCat()
  }, [])

  return (
    <View style = {styles.container}>
      <Text style={styles.baseText} > Avoir chat </Text>
      <Image source = {{uri: img}}
            style={styles.img}
    />
      <Button
        onPress={getCat}
        title="Generate New Cat"
        color="#888888"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  )

  
}

function Home()
{
  const [text, onChangeText] = React.useState('jacques.liu@gmail.com');
  const [number, onChangeNumber] = React.useState('');
  return(
    
    <View style = {styles.container}>
      <Image source={require('./unnamed.jpg')}
      style={styles.img1}
       />
    <SafeAreaView>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="password"
        // keyboardType="numeric"
      />
    </SafeAreaView>
    <Button
        onPress={'Submit'}
        title="Se Connecter"
        color="#888888"
        accessibilityLabel="Learn more about this purple button"
      />
    
    <Image source={require('./CGE.png')}
      style={styles.img2}
       />

    </View>
  )
}
 function MusicScreen()
{
  const buttonColor = ['black','orange'];
  const xylophoneSounds = [
  require('./assets/test.wav'),
  require('./assets/test1.wav'),

]
  const handlePlaySound = async() => {
    const soundObj = new Audio.Sound()

    try
    {
      let source = xylophoneSounds[Math.floor(Math.random()*(1-0) +0)]
      await soundObj.loadAsync(source)
      await soundObj.playAsync().then(async playbackStatus => 
        {
          setTimeout(() =>
          {
            soundObj.unloadAsync()
          },playbackStatus.playableDurationMillis)
          
      
        })    
        .catch(error => {
          console.log(error)
        })
    }
    catch (error)
    {
      console.log(error)
    }
  }

  return (
    <View accessible={true} style = {styles.container}>
      {buttonColor && buttonColor.map((item,index) =>(
        <View key={index} style={styles.buttonContainer} >
          <TouchableOpacity
          style = { [styles.button,{backgroundColor : item}]}
          onPress = {() => this.handlePlaySound}
          >
            <Text style = { styles.buttonText}> {`Sound ${index +1} `} </Text>
            
          </TouchableOpacity>
        </View>



      ))}
    </View>



  );
}


function ParametreScreen()
{
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
  <View accessible={true} style = {styles.container}>
  <Text>text one</Text>
  <Text>text two</Text>
  <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
</View>
  )
}


export default function App() {
return(
  <NavigationContainer>
    <tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name== 'Meme')
          {
            iconName = 'happy'
          }
          else if (route.name == 'Parametre')
          {
            iconName = 'settings'
          }
          else if (route.name == 'Music')
          {
            iconName = 'musical-notes'
          }
          else if(route.name == 'Home')
          {
            iconName = 'home'
          }
          return <Ionicons name = {iconName} size = {25} color ='black' />
        }
      })}
    >
      <tab.Screen name= 'Home' component={Home} />
      <tab.Screen name='Meme' component = {Happy} />
      <tab.Screen name='Music' component = {MusicScreen} />
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
    justifyContent: 'flex-start',
  },
  img:
  {
    width : '80%',
    height: '65%',
    marginBottom : '5%'
  },
  img1:
  {
    width : '100%',
    height: '50%',
  },
  img2:
  {
    width : '80%',
    height: '50%',
  }

  ,input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
  ,baseText: {
    textAlign: 'center',
    textTransform : 'uppercase',
    fontWeight : '700',
    fontStyle :'normal',
    fontSize : 40,
    marginTop : 0,
    
  },
  buttonContainer : {
    height: 40,
    margin: 5
  },
  button :
  {
    flex : 1,
    alignItems : 'center',
    justifyContent :'center'
  },

  buttonText:
  {
    color: '#fff',
    fontSize: 18,
  }
});