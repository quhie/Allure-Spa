import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DetailProfile: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    Alert.alert('Thông báo', 'Bạn chắc chắn với thông tin này chứ?', [
      {
        style: 'cancel',
        text: 'Không, tôi muốn chỉnh sửa lại',
      },
      {
        text: 'Có',
        onPress: () => {
          // @ts-ignore
          Alert.alert('Thông báo', 'Thông tin đã được lưu thành công', [
            {text: 'OK', onPress: () => navigation.navigate('Profile')},
          ]);
        },
      },
    ]);
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            style={styles.iconBack}
            source={{
              uri: 'https://img.icons8.com/ios/452/back--v1.png',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Thông tin người dùng</Text>
      </View>
      <Image
        source={require('../../../res/assets/avtDetailProfile.png')}
        style={styles.avatar}
      />
      <Text style={styles.title2}>Tên</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên"
        value="Nguyễn Văn Thành"
      />
      <Text style={styles.title2}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value="thanh12312312@gmail.com"
      />
      <Text style={styles.title2}>Số điện thoại</Text>
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value="1231231231"
      />
      <Text style={styles.title2}>Dịa chỉ</Text>
      <TextInput
        style={styles.input}
        placeholder="Địa chỉ"
        value="Lào, Lào Cai"
      />
      <Text style={styles.title2}>Giới tính</Text>
      <TextInput style={styles.input} placeholder="Giới tính" value="Nam" />
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.btnSave}>Lưu</Text>
      </Pressable>
    </SafeAreaView>
  );
};

// @ts-ignore
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 20,
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#c9ffff',
    borderRadius: 20,
  },
  radioGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FFBA49',
    width: '70%',
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnSave: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iconBack: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DetailProfile;
