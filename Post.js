// import React, {useState} from 'react';
// import {View, Text, Image, TouchableOpacity, TextInput,FlatList} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// //
//   const postInfo = [
//     {
//       postTitle: 'Monika',
//       postPersonImage: require('./Images/istockphoto-1403283106-170667a.jpg'),
//       postImage: require('./Images/post12.jpg'),
//       //likes: 765,
//   //    isLiked: false,
//     },
//     {
//       postTitle: 'chillhouse',
//       postPersonImage: require('./Images/profile2.jpg'),
//       postImage: require('./Images/profile2.jpg'),
//       //likes: 345,
//       //isLiked: false,
//     },
//     {
//       postTitle: 'Tom',
//       postPersonImage: require('./Images/profile2.jpg'),
//       postImage: require('./Images/profile2.jpg'),
//       //likes: 734,
//       //isLiked: false,
//     },
//     {
//       postTitle: 'The_Groot',
//       postPersonImage: require('./Images/profile2.jpg'),
//       postImage: require('./Images/post1.jpg'),
//       //likes: 875,
//       //isLiked: false,
//     },
//   ];
//   const Post = () => {

//   return (

// <View>
//       {postInfo.map((data, index) =>
//       {
//         const [like, setLike] = useState(data.isLiked);
//         return (
//           <View
//             key={index}
//             style={{
//               paddingBottom: 10,
//               borderBottomColor: 'gray',
//               borderBottomWidth: 0.1,
//             }}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 padding: 15,
//               }}>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <Image
//                   source={data.postPersonImage}
//                   style={{width: 40, height: 40, borderRadius: 100}}
//                 />
//                 <View style={{paddingLeft: 5}}>
//                   <Text style={{fontSize: 15, fontWeight: 'bold'}}>
//                     {data.postTitle}
//                   </Text>
//                 </View>
//               </View>
//               <MaterialIcons name="more-vert" style={{fontSize: 20}} />
//             </View>
//             <View
//               style={{
//                 position: 'relative',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Image
//                 source={data.postImage}
//                 style={{width: '100%', height: 400}}
//               />
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 paddingHorizontal: 12,
//                 paddingVertical: 15,
//               }}>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <TouchableOpacity onPress={() => setLike(!like)}>
//                   <MaterialIcons
//                     name={like ? 'favorite' : 'favorite-outline'}
//                     style={{
//                       paddingRight: 10,
//                       fontSize: 20,
//                       color: like ? 'red' : 'black',
//                     }}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                   <MaterialIcons
//                     name="messenger-outline"
//                     style={{fontSize: 20, paddingRight: 10}}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                   <MaterialIcons name="send" style={{fontSize: 20}} />
//                 </TouchableOpacity>
//               </View>
//               <MaterialIcons name="bookmark-outline" style={{fontSize: 20}} />
//             </View>
//             <View style={{paddingHorizontal: 15}}>
//               <Text>
//                 Liked by {like ? 'you and' : ''}{' '}
//                 {like ? data.likes + 1 : data.likes} others
//               </Text>
//               <Text
//                 style={{
//                   fontWeight: '700',
//                   fontSize: 14,
//                   paddingVertical: 2,
//                 }}>
//                 Have a happy and healthy day :)
//               </Text>
//               <Text style={{opacity: 0.4, paddingVertical: 3}}>
//                 View all comments
//               </Text>
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                   <Image
//                     source={data.postPersonImage}
//                     style={{
//                       width: 25,
//                       height: 25,
//                       borderRadius: 100,
//                       backgroundColor: 'orange',
//                       marginRight: 10,
//                     }}
//                   />
//                   <TextInput
//                     placeholder="Add a comment "
//                     style={{opacity: 0.5}}
//                   />
//                 </View>
//                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                   <MaterialIcons
//                     name="sentiment-very-satisfied"
//                     style={{fontSize: 15, color: 'lightgreen', marginRight: 10}}
//                   />
//                   <MaterialIcons
//                     name="sentiment-neutral"
//                     style={{fontSize: 15, color: 'pink', marginRight: 10}}
//                   />
//                   <MaterialIcons
//                     name="favorite"
//                     style={{fontSize: 15, color: 'red'}}
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// export default Post;

import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Animated,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  {
    id: 1,
    postTitle: 'Monika',
    postPersonImage: require('./Images/istockphoto-1403283106-170667a.jpg'),
    postImage: require('./Images/post12.jpg'),
  },
  {
    id: 2,
    postTitle: 'chillhouse',
    postPersonImage: require('./Images/profile2.jpg'),
    postImage: require('./Images/profile2.jpg'),
  },
  {
    id: 3,
    postTitle: 'Tom',
    postPersonImage: require('./Images/profile2.jpg'),
    postImage: require('./Images/profile2.jpg'),
  },
  { id :4,
    postTitle: 'The_Groot',
    postPersonImage: require('./Images/profile2.jpg'),
    postImage: require('./Images/post1.jpg'),
  },
];

const Post = () => {
  const currentValue = new Animated.Value(1)
  const [like, setLike] = useState();
  const[visible,setVisible] = useState(false)
  const[counter,setcounter] = useState(-2)
  const AnimatedIcon = Animated.createAnimatedComponent(MaterialIcons);
  useEffect(() => {
    if(like==true){
      Animated.spring(currentValue,{
        toValue:2,
        friction:2,
        useNativeDriver:false
      }).start(()=>{
        Animated.spring(currentValue,{
          toValue:1,
      useNativeDriver:false

      }) .start(()=>{
      setVisible(false)
      
   })
  })
 }  
  
  }, [like]);

  return (
    <View>

      {visible &&
      <AnimatedIcon
        style={{
         position: 'absolute',
         // Top: 150,
          left: "40%",
          padding: 70,
          elevation: 8,
          alignItems: 'center',
         zIndex:3,
         justifyContent: 'center',
         //textAlign: "center",
         
          transform:[
            {scale:currentValue}
          ]
        }}
        name="favorite"
        size={50}
        color="red"/>

        }
      
      <FlatList
      
        data={DATA}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({item: data}) => {
          return (
            <View
              style={{
                paddingBottom: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 0.1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={data.postPersonImage}
                    style={{width: 40, height: 40, borderRadius: 100}}
                  />
                  <View style={{paddingLeft: 5}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      {data.postTitle}
                    </Text>
                  </View>
                </View>
                <MaterialIcons name="more-vert" style={{fontSize: 20}} />
              </View>
              <View
                style={{
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.postImage}
                  style={{width: '100%', height: 400}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 12,
                  paddingVertical: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity 

                  onPress={() => {
                  setLike(!data.isLike)}}>
                  
                    <MaterialIcons
                      name={like && data==counter ? 'favorite' : 'favorite-outline'}
                      style={{
                        paddingRight: 10,
                        fontSize: 20,
                        color: like ? 'red' : 'black',
                      }}
                      onPress={()=>{
                      if(like==false){
                        setVisible(true)
                      }
                      setLike(!like)
                      setcounter(data)
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons
                      name="messenger-outline"
                      style={{fontSize: 20, paddingRight: 10}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons name="send" style={{fontSize: 20}} />
                  </TouchableOpacity>
                </View>
                <MaterialIcons name="bookmark-outline" style={{fontSize: 20}} />
              </View>
              <View style={{paddingHorizontal: 15}}>
                <Text>
                  Liked by {like ? 'you and' : ''}{' '}
                  {like ? data.likes + 1 : data.likes} others
                </Text>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 14,
                    paddingVertical: 2,
                  }}>
                  Have a happy and healthy day :)
                </Text>
                <Text style={{opacity: 0.4, paddingVertical: 3}}>
                  View all comments
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={data.postPersonImage}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        backgroundColor: 'orange',
                        marginRight: 10,
                      }}
                    />
                    <TextInput
                      placeholder="Add a comment "
                      style={{opacity: 0.5}}
                    />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons
                      name="sentiment-very-satisfied"
                      style={{
                        fontSize: 15,
                        color: 'lightgreen',
                        marginRight: 10,
                      }}
                    />
                    <MaterialIcons
                      name="sentiment-neutral"
                      style={{fontSize: 15, color: 'pink', marginRight: 10}}
                    />
                    <MaterialIcons
                      name="favorite"
                      style={{fontSize: 15, color: 'red'}}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Post;
