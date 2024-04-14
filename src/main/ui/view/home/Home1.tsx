import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
  Animated,
  FlatList,
  SafeAreaView,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import ItemService from '../../Item/ItemService.tsx';
import ItemHotService from '../../Item/ItemHotService.tsx';
import ItemHotProduct from '../../Item/ItemHotProduct.tsx';
import axios from 'axios';

type DrawerParamList = {
  Drawer: undefined;
  Home: undefined;
  App: undefined;
  BottomTab: undefined;
  Tools: undefined;
  DetailService: {item: Treatments};
};
type Treatments = {
  id: number;
  treatment_name: string;
  treatment_category_id: number;
  description: string;
  execution_time: number;
  price: number;
  image: string;
};

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

const imagePaths = new Array(3).fill(require('../home/assets/img2.png'));

const Home1 = (): React.JSX.Element => {
  const {width: windowWidth} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const data = [
    {id: 1, name: 'Giới Thiệu', image: require('../home/assets/gioithieu.png')},
    {id: 2, name: 'Voucher', image: require('../home/assets/voucher.png')},
    {id: 3, name: 'Dịch Vụ', image: require('../home/assets/dichvu.png')},
    {
      id: 4,
      name: 'Sản Phẩm Độc Quyền',
      image: require('../home/assets/sanphamdocquyen.png'),
    },
  ];

  const [displayedServiceCount, setDisplayedServiceCount] = useState(4);
  const [treatments, setTreatments] = useState<Treatments[]>([]);
  const [cosmetics, setCosmetics] = useState<Cosmetic[]>([]);

  useEffect(() => {
    // Gọi API treatments
    axios
      .get('https://thanhnn.me/api/treatments')
      .then(response => {
        setTreatments(response.data.treatments);
      })
      .catch(error => {
        console.error(error);
      });

    // Gọi API cosmetics
    axios
      .get('https://thanhnn.me/api/cosmetics')
      .then(response => {
        setCosmetics(response.data.cosmetics);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSeeMore = () => {
    setDisplayedServiceCount(displayedServiceCount + 4);
  };
  // @ts-ignore
  // @ts-ignore
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              style={styles.imgMenu}
              source={require('../home/assets/burger-button.png')}
            />
          </Pressable>
          <View style={styles.header2}>
            <Image
              style={styles.image}
              source={require('../home/assets/logo2.png')}
            />
            <Image
              style={styles.image2}
              source={require('../home/assets/name_spa.png')}
            />
          </View>
          <Pressable onPress={
            () => navigation.navigate('Cart')
          }>
            <Image
              style={styles.imgCart}
              source={require('../home/assets/cart.png')}
            />
          </Pressable>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}>
            {imagePaths.map((imagePath, imageIndex) => {
              return (
                <View
                  style={{width: windowWidth, height: 500}}
                  key={imageIndex}>
                  <ImageBackground
                    source={imagePath}
                    resizeMode="cover"
                    style={styles.card}
                  />
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {imagePaths.map((imagePath, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 26, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, {width}]}
                />
              );
            })}
          </View>
        </View>
        <View>
          <FlatList
            style={styles.flatList1}
            horizontal={true}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ItemService item={item} />}
          />
        </View>
        <View style={styles.vService}>
          <Text style={styles.text2}>Dịch Vụ Nổi Bật</Text>
          <Pressable style={styles.btnSeeMore} onPress={handleSeeMore}>
            <Text style={styles.text3}>Xem Thêm</Text>
          </Pressable>
        </View>
        <FlatList
          style={styles.flatList2}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailService', {item: item})
              }>
              <ItemHotService item={item} />
            </TouchableOpacity>
          )}
          data={treatments.slice(0, displayedServiceCount)}
        />
        <View style={styles.vService}>
          <Text style={styles.text2}>Sản Phẩm Nổi Bật</Text>
          <Pressable style={styles.btnSeeMore}>
            <Text style={styles.text3}>Xem Thêm</Text>
          </Pressable>
        </View>
        <FlatList
          style={styles.flatList3}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailProduct', {item: item})
              }>
              <ItemHotProduct item={item} />
            </TouchableOpacity>
          )}
          data={cosmetics.slice(0, displayedServiceCount)}
        />
        <View style={styles.vService}>
          <Text style={styles.text2}>Sản Phẩm Bán Chạy</Text>
          <Pressable style={styles.btnSeeMore}>
            <Text style={styles.text3}>Xem Thêm</Text>
          </Pressable>
        </View>
        <FlatList
          style={styles.flatList3}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailService', {item: item})
              }>
              <ItemHotProduct item={item} />
            </TouchableOpacity>
          )}
          data={cosmetics.slice(0, displayedServiceCount)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
  },
  header2: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  imgMenu: {
    width: 22,
    height: 22,
  },
  image: {
    width: 50,
    height: 50,
  },
  image2: {
    height: 20,
    resizeMode: 'contain',
  },
  imgCart: {
    width: 30,
    height: 30,
  },
  scrollContainer: {
    height: 200,
    width: '100%',
  },
  card: {
    height: 200,
    width: '100%',
    marginVertical: 4,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 5,
    width: 15,
    borderRadius: 4,
    backgroundColor: '#EDC06C',
    marginHorizontal: 4,
    marginTop: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vService: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 20,
  },
  btnSeeMore: {
    width: 100,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  text3: {
    fontSize: 16,
    color: '#EDC06C',
    textDecorationLine: 'underline',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 20,
    top: 5,
  },
  flatList1: {
    marginTop: 0,
    height: 100,
  },
  flatList2: {
    marginTop: 10,
  },
  flatList3: {
    marginTop: 10,
  },
});

export default Home1;
