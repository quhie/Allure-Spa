import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Pressable,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const imagePaths = new Array(3).fill(
  require('../../res/assets/imgOnbording.png'),
);

const Onbording = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
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
              <View style={{width: windowWidth, height: 500}} key={imageIndex}>
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

      <Text style={styles.tv1}>SPA TUYỆT VỜI</Text>
      <Text style={styles.tv2}>
        Allure Spa sẽ mang đến làn sóng về thời điểm cấu trúc sức khỏe tốt nhất
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Welcome')}>
        <Image
          source={require('../../res/assets/arrow-left.png')}
          style={styles.arrowIcon}
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F2E7',
    alignItems: 'center',
  },
  scrollContainer: {
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
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
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tv1: {
    color: '#0D0D0D',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 50,
  },
  tv2: {
    color: '#0D0D0D',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  arrowIcon: {
    top: 22,
    left: 22,
    height: 24,
    zIndex: 1,
    width: 24,
    position: 'absolute',
  },
  button: {
    alignItems: 'center',
    marginTop: 70,
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#F4CF69',
  },
});

export default Onbording;
