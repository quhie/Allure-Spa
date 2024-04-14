import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomCheckbox from '../../ui/Item/checkBox/CustomCheckbox.tsx';
import {useNavigation} from '@react-navigation/native';


// @ts-ignore
import CartContext from '../Item/CartContext.tsx';

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
};

type CartProps = {
  refRBSheet: React.RefObject<RBSheet>;
  cartItems: Cosmetic[];
  isCartVisible: boolean;
  handleMinus: () => void;
  handlePlus: () => void;
  handleTrashPress: () => void;
  total: number;
  totalPrice: number;
};
const Cart: React.FC<CartProps> = ({
  refRBSheet,
  handleMinus,
  handlePlus,
  handleTrashPress,
  total,
  totalPrice,
}) => {
  const {cartItems, isCartVisible} = useContext(CartContext);
  console.log(cartItems);
  const navigation = useNavigation();

  const handleCheckout = () => {
    // Replace this with your actual authentication check
    const isAuthenticated = false;

    if (!isAuthenticated) {
      Alert.alert('Thông báo', 'Bạn cần đăng nhập để tiếp tục thanh toán', [
        {
          text: 'Ở lại',
          style: 'cancel',
        },
        {
          text: 'Đăng nhập',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
    } else {
      // Handle the checkout process here
    }
  };
  const {setCartItems} = useContext(CartContext);

  const handleClearCart = () => {
    setCartItems([]);
  };

  const renderItem = ({item: cartItem}) => (
    <View style={styles.containerCart}>
      <CustomCheckbox />
      <Image
        style={styles.image2}
        source={{uri: `https://thanhnn.me/${cartItem.image}`}}
      />
      <View>
        <Text style={styles.tvName}>{cartItem.cosmetic_name}</Text>
        <Text style={styles.tvPrice2}>{cartItem.price} VNĐ</Text>
        <View style={styles.containerTotal}>
          <Pressable onPress={handleMinus}>
            <Image
              style={styles.iconMinus}
              source={{
                uri: 'https://img.icons8.com/ios/50/000000/minus.png',
              }}
            />
          </Pressable>
          <Text style={styles.tvTotal}> {total} </Text>
          <Pressable onPress={handlePlus}>
            <Image
              style={styles.iconPlus}
              source={{
                uri: 'https://img.icons8.com/ios/50/000000/plus.png',
              }}
            />
          </Pressable>
        </View>
        <Pressable onPress={handleTrashPress}>
          <Image
            style={styles.iconTrash}
            source={{
              uri: 'https://img.icons8.com/carbon-copy/100/filled-trash.png',
            }}
          />
        </Pressable>
      </View>
    </View>
  );

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={700}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.6)',
        },
        container: {
          borderRadius: 20,
          backgroundColor: '#ffffff',
          alignItems: 'center',
        },
      }}>
      <View>
        <Text style={styles.tvInfBook}>Giỏ Hàng</Text>
      </View>
      {isCartVisible && (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
      <Text style={styles.tvTotal2}>Tổng giá trị: {totalPrice} VNĐ</Text>
      <Pressable style={styles.btnCleanAll} onPress={handleClearCart}>
        <Text style={styles.tvCleanAll}>Xóa Tất Cả</Text>
      </Pressable>
      <Pressable style={styles.btnBuy} onPress={handleCheckout}>
        <Text style={styles.tvDatLich}>Thanh Toán</Text>
      </Pressable>
    </RBSheet>
  );
};
const styles = StyleSheet.create({
  containerCart: {
    flexDirection: 'row',
    height: 150,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  tvInfBook: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tvName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tvPrice2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  tvTotal2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ff0000',
    margin: 50,
  },
  containerTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tvTotal: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconMinus: {
    height: 20,
    width: 20,
    margin: 10,
  },
  iconPlus: {
    height: 20,
    width: 20,
    margin: 10,
  },
  iconTrash: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  image2: {
    height: 100,
    width: 100,
    margin: 10,
  },
  btnCleanAll: {
    height: 50,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#EDC06C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tvCleanAll: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  btnBuy: {
    height: 50,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#EDC06C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tvDatLich: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Cart;
