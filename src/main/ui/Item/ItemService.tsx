import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface Item {
  item: {
    id: number;
    name: string;
    image: string;
  };
}

const ItemService: React.FC<Item> = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode={'contain'} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: 80,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 13,
    marginRight: 13,
  },
  image: {
    width: 30,
    height: 50,
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    color: '#EDC06C',
  },
});

export default ItemService;
