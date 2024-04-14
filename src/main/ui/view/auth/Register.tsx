import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleBack = () => {
    navigation.goBack();
  };
  const handleNextPress = () => {
    if (username.length === 10 && password === confirmPassword && password.length >= 8) {
      const data = {
        phone_number: username,
        password: password,
      };

      const api = axios.create({
        baseURL: 'https://thanhnn.me/api',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      api
        .post('/register', data)
        .then(response => {
          console.log(response.data);
          Alert.alert('Thành công', 'Đăng ký thành công. Bạn có thể đăng nhập ngay bây giờ.');
          navigation.navigate('Login');
        })
        .catch(error => {
          console.error(error);
          if (error.response && error.response.data) {
            const errors = error.response.data.errors;
            if (errors.phone_number) {
              setPhoneError(errors.phone_number[0]);
            }
            if (errors.password) {
              setPasswordError(errors.password[0]);
            }
          } else {
            Alert.alert('Lỗi', 'Đăng ký không thành công. Vui lòng thử lại.');
          }
        });
    }
  };

  const handlePhoneChange = (text: string) => {
    if (text.length !== 10) {
      setPhoneError('Số điện thoại ít nhất 10 số');
    } else {
      setPhoneError('');
    }
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    if (text.length < 6) {
      setPasswordError('Mật khẩu ít nhất 6');
    } else {
      setPasswordError('');
    }
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text: string) => {
    if (text !== password) {
      setConfirmPasswordError('Mật khẩu không khớp');
    } else {
      setConfirmPasswordError('');
    }
    setConfirmPassword(text);
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          style={styles.iconBack}
          source={{
            uri: 'https://img.icons8.com/ios/452/back--v1.png',
          }}
        />
      </TouchableOpacity>

      <SafeAreaView style={styles.container2}>
        <Image
          source={require('../../res/assets/logo2.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../res/assets/nameSpa.png')}
          style={styles.nameSpa}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại..."
          value={username}
          onChangeText={handlePhoneChange}
          keyboardType="phone-pad"
        />
        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu..."
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu..."
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          secureTextEntry
        />
        {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
        <TouchableOpacity style={styles.btnNext} onPress={handleNextPress}>
          <Text style={styles.tBtnNext}>Tạo Tài Khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.tvBack}>Chưa phải bây giờ</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  iconBack: {
    width: 20,
    height: 20,
    marginTop: 50,
    marginStart: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    height: 70,
    width: 70,
    marginTop: 40,
  },
  nameSpa: {
    height: '10%',
    width: 150,
    marginTop: -20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: '75%',
    marginTop: 30,
    fontSize: 16,
    color: '#423838',
    letterSpacing: -0.2,
  },
  btnNext: {
    marginTop: 100,
    height: 50,
    width: '75%',
    alignSelf: 'center',
    borderColor: '#EDC06C',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EDC06C',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  tBtnNext: {
    color: '#EDC06C',
    fontSize: 17,
    fontWeight: 'bold',
  },
  tvBack: {
    marginTop: 60,
    color: '#000000',
    fontSize: 17,
    fontWeight: '300',
  },
  errorText: {
    color: 'red',
  },
});

export default Register;

