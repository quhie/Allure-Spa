import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert, Pressable, SafeAreaView
} from "react-native";
import {useNavigation} from '@react-navigation/native';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn đăng xuất không?', [
      {
        style: 'cancel',
        text: 'Không',
      },
      {text: 'Có', onPress: () => navigation.navigate('Onboarding')},
    ]);
  };

  const items = [
    {icon: require('../../res/assets/mdi_cards-heart.png'), text: 'Yêu Thích'},
    {
      icon: require('../../res/assets/ri_secure-payment-line.png'),
      text: 'Thanh Toán',
    },
    {
      icon: require('../../res/assets/time.png'),
      text: 'Lịch Sử',
    },
    {
      icon: require('../../res/assets/vector.png'),
      text: 'Cài Đặt',
      onPress: () => navigation.navigate('Settings'),
    },
    {icon: require('../../res/assets/Voucher.png'), text: 'Voucher'},
  ];
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.relativeLayout}>
        <View style={styles.header}>
          <Pressable onPress={handleBackPress}>
            <Image
              style={styles.iconBack}
              source={{
                uri: 'https://img.icons8.com/ios/452/back--v1.png',
              }}
            />
          </Pressable>
          <Text style={styles.profileText}>PROFILE</Text>
        </View>
        <TouchableOpacity
          style={styles.avt}
          onPress={() => navigation.navigate('DetailProfile')}>
          <Image
            source={require('../../res/assets/userIcon.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <Text style={styles.nameText}>Welcome Customer</Text>

        <Text style={styles.phoneNumberText} />

        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.logoutContainer}
            onPress={item.onPress}>
            <Image source={item.icon} style={styles.logoutIcon} />
            <Text style={styles.logoutText}>{item.text}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
          <Image
            source={require('../../res/assets/logout.png')}
            style={styles.logoutIcon}
          />
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  relativeLayout: {
    flex: 1,
    backgroundColor: 'white',
  },
  avt: {
    width: 90,
    height: 90,
    marginStart: 50,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 45,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  nameText: {
    marginTop: 10,
    marginStart: 30,
    fontSize: 23,
    fontWeight: 'bold',
  },
  phoneNumberText: {
    fontSize: 20,
    color: '#B1B1B1',
    fontWeight: 'bold',
  },
  listView: {
    marginStart: 20,
    marginTop: 40,
    marginEnd: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 27,
    marginTop: 10,
    paddingVertical: 15,
  },
  logoutIcon: {
    width: 36,
    height: 36,
    marginStart: 15,
  },
  logoutText: {
    marginStart: 12,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 56,
    elevation: 4,
    justifyContent: 'space-between',
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    right: 180,
  },
  iconBack: {
    width: 24,
    height: 24,
    marginStart: 16,
  },
});

export default Profile;
