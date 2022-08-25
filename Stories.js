

import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image,FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Stories = () => {
 const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('./Images/image.jpg'),
    },
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('./Images/istockphoto-1249287421-612x612.jpg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('./Images/istockphoto-1371823675-170667a.jpg'),
    },
    {
      id: 0,
      name: 'The_Groot',
      image: require('./Images/istockphoto-1403283106-170667a.jpg'),
    },
    ,
    {
      id: 0,
      name: 'loverland',
      image: require('./Images/image.jpg'),
    },
    ,
    {
      id: 0,
      name: 'chillhouse',
      image: require('./Images/image.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
    
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <MaterialIcons
                    name="add-circle-outline"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

