import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Stories from './Stories';
import Post from './Post';

const Screen = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        {/* <MaterialIcons name="add-circle-outline" style={{fontSize: 24}} /> */}
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color:'black'
          }}>
          Instagram
        </Text>
        <MaterialIcons name="send" style={{fontSize: 24}} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
        {/* <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <MaterialIcons
            name="add-circle-outline"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default Screen;
