import React from 'react';
import { View, Text } from 'react-native';


export const RepositoryItem = ({ item, index, separators }) =>
    <View
      key={item.key}
      style={{ backgroundColor: 'white' }}>
        <Text>Full name: {item.fullName}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Language: {item.language}</Text>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
    </View>
  ;

 export default RepositoryItem;