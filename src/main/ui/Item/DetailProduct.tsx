import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Cart from './cart.tsx';
import {Linking} from 'react-native';
import CartContext from './CartContext.tsx';

export type Cosmetic = {
  id: number;
  cosmetic_name: string;
  cosmetic_category_id: number;
  description: string;
  price: number;
  purpose: string;
  ingredients: string;
  how_to_use: string;
  image: string;
};

const DetailProduct = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const {addToCart} = useContext(CartContext);

  const refRBSheet = useRef(null);
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [cartItems] = useState<Cosmetic[]>([]);

  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleMinus = () => {
    if (total > 1) {
      setTotal(total - 1);
      setTotalPrice(totalPrice - item.price);
    }
  };
  const handlePlus = () => {
    setTotal(total + 1);
    setTotalPrice(totalPrice + item.price);
  };
  const handleTrashPress = () => {
    setTotal(0);
    setTotalPrice(0);
    setIsCartVisible(false); // Ẩn containerCart
  };

  const route = useRoute();
  const {item} = route.params as {item: Cosmetic};
  console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerDetail}>
        <Pressable onPress={handleBackPress}>
          <Image
            style={styles.iconBack}
            source={{
              uri: 'https://img.icons8.com/ios/452/back--v1.png',
            }}
          />
        </Pressable>
        <Text style={styles.tv1}>Chi Tiết Sản Phẩm</Text>
      </View>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{uri: `https://thanhnn.me/${item.image}`}}
        />
        <Text style={styles.tv2}>{item.cosmetic_name}</Text>
        <View style={styles.containerPrice}>
          <Image
            style={styles.iconPrice}
            source={{
              uri: 'https://img.icons8.com/color/48/ticket.png',
            }}
          />
          <Text style={styles.tvPrice}>{item.price} VNĐ</Text>
        </View>
        <View style={styles.containerDes}>
          <View style={styles.containerDes2}>
            <Image
              style={styles.iconSun}
              source={{
                uri: 'https://img.icons8.com/ios/50/sun--v1.png',
              }}
            />
            <Text style={styles.tv3}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.containerDes}>
          <View style={styles.containerDes2}>
            <Image
              style={styles.iconSun}
              source={{
                uri: 'https://img.icons8.com/ios/50/marker--v1.png',
              }}
            />
            <Text style={styles.tv3}>
              Tầng 1 Shophouse P1- SH02 Vinhome Central Park, 720A Điện Biên
              Phủ, Phường 22, Quận Bình Thạnh
            </Text>
          </View>
        </View>
        <View style={styles.containerDes}>
          <View style={styles.containerDes2}>
            <Image
              style={styles.iconSun}
              source={{
                uri: 'https://img.icons8.com/ios/50/phone.png',
              }}
            />
            <Text style={styles.tv3}>
              (84) 986 910 920 (zalo) - (84) 889 130 222
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.tvLieuTrinh}>Liệu Trình</Text>
        <Text style={styles.tv4}> {item.purpose}</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Pressable
            style={styles.btnCall}
            onPress={() => {
              Linking.openURL('tel:0986910920');
            }}>
            <Image
              style={styles.iconCall}
              source={{
                uri: 'https://img.icons8.com/ios/50/000000/phone--v1.png',
              }}
            />
            <Text style={styles.tv6}>Gọi cho tôi</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.btnVote}>
            <Image
              style={styles.iconCall}
              source={{
                uri: 'https://img.icons8.com/ios/50/sms.png',
              }}
            />
            <Text style={styles.tv6}>Đánh giá</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.btnDatLich}
          onPress={() => {
            addToCart(item);
            refRBSheet.current.open();
          }}>
          <Text style={styles.tvDatLich}>Thêm Vào Giỏ Hàng</Text>
        </Pressable>
        <Cart
          refRBSheet={refRBSheet}
          cartItems={cartItems}
          isCartVisible={isCartVisible}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          handleTrashPress={handleTrashPress}
          total={total}
          totalPrice={totalPrice}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  iconBack: {
    height: 20,
    width: 20,
    left: 20,
    alignItems: 'flex-start',
  },
  containerDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerDes: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    end: 20,
  },
  containerDes2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  iconSun: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginRight: 20,
  },
  tv3: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'normal',
    alignSelf: 'center',
    marginHorizontal: 10,
    end: 20,
  },
  tvPrice: {
    fontSize: 23,
    color: '#EDC06C',
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tv1: {
    fontSize: 20,
    color: '#000000',
    right: 135,
    fontWeight: 'bold',
  },
  header: {
    flex: 16,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginHorizontal: 20,
    borderRadius: 15,
  },
  tv2: {
    fontSize: 25,
    color: '#000000',
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  tv4: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  iconPrice: {
    width: 30,
    height: 30,
    marginTop: 20,
    marginLeft: 15,
  },
  body: {
    flex: 6,
  },
  tvLieuTrinh: {
    fontSize: 23,
    color: '#EDC06C',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 2,
    borderTopWidth: 2,
    borderTopColor: '#d7d7d7',
  },
  btnDatLich: {
    height: 50,
    width: 200,
    backgroundColor: '#EDC06C',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
    start: 10,
    marginHorizontal: 20,
  },
  tvDatLich: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  iconCall: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  tv6: {
    fontSize: 15,
    color: '#AFAFAF',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btnCall: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  btnVote: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  tvInfBook: {
    fontSize: 22,
    color: '#EDC06C',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  containerCart: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  image2: {
    width: 100,
    height: 100,
    borderRadius: 15,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  tvName: {
    fontSize: 13,
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  tvPrice2: {
    fontSize: 15,
    color: '#EDC06C',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  containerTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 0,
  },
  iconMinus: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  iconPlus: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  iconTrash: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: 5,
  },
  tvTotal: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  tvTotal2: {
    fontSize: 25,
    color: '#EDC06C',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default DetailProduct;
