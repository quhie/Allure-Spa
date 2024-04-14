import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import {Alert} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isUsernameError, setIsUsernameError] = useState(false);
  const handleLogin = () => {
    setIsUsernameError(false);
    // Check if the phone number has exactly 10 digits
    if (username.length !== 10) {
      Alert.alert('Lỗi', 'Số điện thoại phải có đúng 10 số.');
      setIsUsernameError(true);
      return;
    }

    // Check if the password has at least 6 characters
    if (password.length < 6) {
      Alert.alert('Lỗi', 'Mật khẩu phải có ít nhất 6 ký tự.');
      return;
    }

    const data = {
      phone_number: username,
      password: password,
    };

    // console.log(data);
    const api = axios.create({
      baseURL: 'https://thanhnn.me/api',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    api
      .post('/login-get-token', data)
      .then(response => {
        console.log(response.data);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
      });
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          style={styles.iconBack}
          source={{
            uri: 'https://img.icons8.com/ios/452/back--v1.png',
          }}
        />
      </TouchableOpacity>

      <Image
        style={styles.logo}
        source={require('../../res/assets/logo2.png')}
      />

      <Image
        style={styles.nameSpa}
        source={require('../../res/assets/nameSpa.png')}
      />

      <View style={styles.inputContainer}>
        <Image
          style={styles.iconUser}
          source={require('../../res/assets/userIcon.png')}
        />
        <TextInput
          style={[styles.input, isUsernameError ? styles.error : null]}
          placeholder="Số điện thoại.."
          value={username}
          onChangeText={setUsername}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.iconPass}
          source={require('../../res/assets/passwordIcon.png')}
        />
        <TextInput
          style={[styles.input, isUsernameError ? styles.error : null]}
          placeholder="Mật khẩu.."
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            source={
              isPasswordVisible
                ? require('../../res/assets/eyeClose.png')
                : require('../../res/assets/eyeOpen.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnForgotPass}>
        <Text>Quên mật khẩu?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.customButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 130,
          alignSelf: 'center',
        }}>
        <Text>Bạn chưa có tài khoản?</Text>

        <TouchableOpacity
          style={styles.btnRegis}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Đăng ký ngay</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    height: 70,
    width: 70,
    marginTop: 100,
    alignSelf: 'center',
  },
  nameSpa: {
    height: '10%',
    width: 150,
    marginTop: -20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
  },
  iconUser: {
    marginRight: 10,
    marginLeft: 3,
    width: 30,
    height: 30,
  },
  iconPass: {
    marginRight: 15,
    marginLeft: 5,
    width: 20,
    height: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: '75%',
  },
  error: {
    borderColor: 'red',
  },
  eyeIcon: {
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  btnForgotPass: {
    marginBottom: 12,
    alignItems: 'flex-end',
    width: '85%',
  },
  customButton: {
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
  buttonText: {
    color: '#EDC06C',
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnRegis: {
    width: '30%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBack: {
    width: 20,
    height: 20,
    marginTop: 50,
    marginStart: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
export default LoginScreen;
