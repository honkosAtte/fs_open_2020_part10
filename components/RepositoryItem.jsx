import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const cardHeaderStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-around',
      marginBottom:20,
    },
    avatar: {
      width: 55,
      height: 55,
      borderRadius: 5,
      margin:10
    },
    avatarContainer: {
        flexDirection: 'row',
        flexGrow: 0,
      paddingRight: 15,
    },
    infoContainer: {
      flexGrow: 1,
    },
    whiteTextonBlue:{  
        padding:5,
        marginLeft:85,
        alignSelf:'flex-start',
        color:'white',
        backgroundColor:'blue',
        borderRadius:2,
        fontSize:15,
    },
    grayText:{
        color:'gray'
    },
    boldNumber:{
        fontWeight: 'bold'
    },
    container2:{
        flexDirection:'column',
        justifyContent: 'space-around',
        marginTop:10,
        alignItems:'center'

    }
  });


  const cardFooterStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-around',
      marginBottom:20
    },
    actionTouchable: {
      flexGrow: 0,
    },
    actionText: {
      textDecorationLine: 'underline',
    },
    spaceOdyssey: {
        backgroundColor:'lightgrey',
        height:10
    }
  });

  const cardStyles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
    },
  });


// eslint-disable-next-line no-unused-vars
export const RepositoryItem = ({ item, index, separators }) =>
    <View
    style={cardStyles.container}
      key={item.key}
      >
          <View
          style={cardHeaderStyles.avatarContainer}
          >
          <Image 
        style={cardHeaderStyles.avatar}
        source={
           {         
          uri: item.ownerAvatarUrl
        }}
/>
        <View  >
        <Text style={{fontWeight: 'bold', margin:10}}>{item.fullName}</Text>
        <Text style={{marginLeft:10, color:'gray'}}> {item.description}</Text>
         </View>
         </View>
          
        <Text style={cardHeaderStyles.whiteTextonBlue}>{item.language}</Text>
        
        <View style={cardFooterStyles.container}>

        <View style={cardHeaderStyles.container2}>
        <Text style={cardHeaderStyles.boldNumber}>{(item.stargazersCount/1000).toFixed(1)}k</Text>
        <Text style={cardHeaderStyles.grayText}>Stars</Text>
        </View>
        <View style={cardHeaderStyles.container2}>
        <Text style={cardHeaderStyles.boldNumber}>{(item.forksCount / 1000).toFixed(1)}k</Text>
        <Text style={cardHeaderStyles.grayText}>Forks</Text>
        </View>
        <View style={cardHeaderStyles.container2}>
        <Text style={cardHeaderStyles.boldNumber}>{item.reviewCount}</Text>
        <Text style={cardHeaderStyles.grayText}>Reviews</Text>
        </View>
        <View style={cardHeaderStyles.container2}>
        <Text style={cardHeaderStyles.boldNumber}>{item.ratingAverage}</Text>
        <Text style={cardHeaderStyles.grayText}>Rating</Text>
        </View>
        </View>
        <View style={cardFooterStyles.spaceOdyssey}><Text></Text></View>
    </View>
    
  ;

 export default RepositoryItem;

 //ownerAvatarUrl