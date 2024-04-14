import React from 'react';
import {Text, Image, StyleSheet, Pressable, View} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';

type Cosmetic = {
  id: number;
  cosmetic_name: string;
  cosmetic_category_id: number;
  description: string;
  price: number;
  purpose: string;
  ingredients: string;
  how_to_use: string;
  image: string;
  created_at: string;
  updated_at: string;
};

type ItemHotServiceProps = {
  item: Cosmetic;
};

const ItemHotProduct: React.FC<ItemHotServiceProps> = ({item}) => {
  return (
    <View style={styles.itemContainer} key={item.id}>
      <Image
        style={styles.image}
        source={{uri: `https://thanhnn.me/${item.image}`}}
      />
      <Image
        style={styles.iconHeart}
        source={require('../view/home/assets/heart.png')}
      />
      <View style={styles.textContainer}>
        <Title style={styles.serviceTitle}>{item.cosmetic_name}</Title>
        <Paragraph
          style={styles.serviceDescription}
          numberOfLines={2}
          ellipsizeMode='tail'
        >
          {item.description}
        </Paragraph>
        <Text style={styles.servicePrice}>{item.price} VND</Text>
        <Pressable style={styles.btnAddToCart}>
          <Image
            style={styles.iconAddToCart}
            source={require('../view/home/assets/cart.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    height: 400,
    width: 220,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 15,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#333',
  },
  serviceDescription: {
    marginHorizontal: 10,
    overflow: 'hidden',
    color: '#666',
  },
  servicePrice: {
    fontSize: 20,
    color: '#EDC06C',
    marginTop: 15,
    marginStart: 15,
    marginBottom: 15,
  },
  btnAddToCart: {
    height: 45,
    width: 45,
    alignItems: 'flex-end',
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#EDC06C',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    bottom: 2,
    right: 15,
  },
  iconAddToCart: {
    height: 25,
    width: 25,
    tintColor: 'white',
    marginEnd: 10,
  },
  iconHeart: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

export default ItemHotProduct;
