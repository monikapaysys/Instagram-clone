// // In App.js in a new project

// import React from 'react';
// import { View,Button, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>

//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// const App=()=> {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Isntagram" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import logo from './Components/Images/instalogo.jpg';
import Status from './Components/Status';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  StatusBar,
  Pressable,
  Switch,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import Screen from './Components/Screen';
import Post from './Components/Post';
const MyApp = ({navigation}) => {
  const [show, setshow] = useState(false);
  const [state, setstate] = useState(false);
  const [visible, setvisible] = useState(false);
  const [text, settext] = useState('');
  const [pass, setpass] = useState('');

  const validate = () => {
    if (text == '') {
      alert('Enter valid email');
    } else if (pass == '') {
      alert('Enter valid password');
    } else {
      props.navigation.navigate('Screen');
    }

    //  alert('welcome to screen!');
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#000'} barStyle="light-content" />
        <Image source={logo} style={styles.logo} />

        <View
          style={{
            margin: 20,
          }}>
          {/* <Text style={styles.logo}>Isntagram</Text> */}
          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            placeholder={'Email or Phone'}
            onChangeText={settext}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            placeholder={'Password'}
            secureTextEntry={visible}
            onChangeText={setpass}
          />

          <TouchableOpacity
            onPress={() => {
              setvisible(!visible);
              setshow(!show);
            }}></TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Screen')}
            style={styles.button}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: '500',
              }}>
              Log In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.pass, {marginTop: 50}]}
            onPress={({}) => {
              // alert('hi');

              setstate(true);
            }}>
            <Text style={styles.txt}>
              forgot your password ? get help for sign in
            </Text>
          </TouchableOpacity>

          <View style={styles.FP}>
            <TouchableOpacity
              style={styles.pass}
              onPress={({}) => {
                // alert('hi');

                setstate(true);
              }}>
              {/* <Text style={styles.txt}>Forget Password</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    margintop: 50,
    backgroundColor: 'white',
    flex: 1,

    justifyContent: 'center',
  },
  logo: {
    height: hp(10), // 70% of height device screen
    width: wp(20), // 80% of width device screen
    // height: 150,,,
    // width: 150,
    alignSelf: 'center',
    marginTop: 20,
    // fontStyle: 'italic',
    //backgroundColor: 'grey',
    borderRadius: 1000,
  },

  input: {
    height: 48,
    marginTop: 20,
    //borderRadius: 5,
    // fontSize: 20,
    // paddingLeft: 20,
    //retg color: 'white',
    // marginHorizontal:30,
    //padding:12,
    //borderBottomWidth: 1,
    //borderBottomColor: 'black',
    marginBottom: 10,
    backgroundColor: '#F6C6EA',
  },
  button: {
    alignItems: 'center',
    //backgroundColor: '#6E85B7',
    backgroundColor: '#80558C',
    padding: 11,
    marginTop: 60,
  },
  pass: {
    marginTop: 30,
    //fontSize: 25
    fontSize: hp('5%'),
    textAlign: 'center',
    alignItems: 'center',
  },

  txt: {
    //color: 'white',
  },
  FP: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },
});





const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeSTab() {
  return (
    <Tab.Navigator initialRouteName="Screen">
      <Tab.Screen
        name="Home"
        component={Screen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        // options={{headerShown: false}}
        name="Setting"
        component={Post}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}











//const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MyApp"
          component={MyApp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Screen"
          component={Screen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Status"
          component={Status}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
