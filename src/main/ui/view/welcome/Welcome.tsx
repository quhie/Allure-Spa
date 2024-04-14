import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Welcome extends Component {
  render() {
    // @ts-ignore
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../res/assets/bg_welcome.png')}
          resizeMode={'stretch'}
          style={styles.bg1}>
          <Image
            source={require('../../res/assets/logo2.png')}
            style={styles.logo}
          />
          <Image
            source={require('../../res/assets/nameSpa.png')}
            style={styles.nameSpa}
            resizeMode={'cover'}
          />
          {}
          <View style={styles.tvContainer}>
            <Text style={styles.tv1}>
              Allure Spa sẽ đưa làn da về đúng thời điểm cấu trúc sức khỏe tốt
              nhất
            </Text>
          </View>
        </ImageBackground>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.tvBtnLogin}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegis}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.tvbtnRegis}>Đăng Kí</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate('DrawerHome')}>
          <Text style={styles.tvbtnNext}>Tôi muốn đăng ký sau</Text>
        </TouchableOpacity>
        <View style={styles.vContainer}>
          <View style={styles.v1}></View>
          <Text style={styles.tvOr}>or with</Text>
          <View style={styles.v2}></View>
        </View>
        {/*Dang nhap bang google*/}
        <TouchableOpacity style={styles.btnLoginGG}>
          <Image
            source={require('../../res/assets/ic_gg.png')}
            style={styles.logoGG}
          />
          <Text style={styles.tvBtnLoginGG}>Đăng nhập với Google</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  bg1: {
    height: 400,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    height: 70,
    width: 70,
    marginTop: 40,
  },
  nameSpa: {
    height: '10%',
    width: 150,
    marginTop: 10,
  },
  tvContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tv1: {
    lineHeight: 19,
    fontSize: 16,
    color: '#423838',
    letterSpacing: -0.2,
    margin: 20,
    textAlign: 'center',
  },
  btnLogin: {
    backgroundColor: '#EDC06C',
    height: 50,
    width: '75%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#ffa500',
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  tvBtnLogin: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
  },
  btnRegis: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '75%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#EDC06C',
    borderWidth: 2,
    shadowColor: '#ffa500',
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  tvbtnRegis: {
    color: '#EDC06C',
    fontSize: 19,
    fontWeight: 'bold',
  },
  btnNext: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#EDC06C',
    borderBottomWidth: 2,
    padding: 2,
  },
  tvbtnNext: {
    marginTop: 20,
    color: '#F49517',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  vContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  v1: {
    height: 1,
    width: 120,
    backgroundColor: '#d7d7d7',
  },
  v2: {
    height: 1,
    width: 120,
    backgroundColor: '#d7d7d7',
  },
  tvOr: {
    marginHorizontal: 10,
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  btnLoginGG: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 50,
    width: '75%',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderColor: '#7A7A7A',
    shadowColor: '#7A7A7A',
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  tvBtnLoginGG: {
    color: '#7A7A7A',
    fontSize: 19,
    marginLeft: 25,
  },
  logoGG: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },
});

export default Welcome;
