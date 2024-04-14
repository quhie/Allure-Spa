import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Appearance} from 'react-native';

const Settings = () => {
  const navigation = useNavigation();

  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const handleBackPress = () => {
    navigation.goBack();
  };
  const toggleSwitch1 = () => {
    setIsEnabled1(previousState => !previousState);
  };
  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  };
  const toggleSwitch3 = () => {
    setIsEnabled3(previousState => !previousState);
  };

  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
    return (
      <SafeAreaView style={[styles.container]}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.header}>
            <TouchableOpacity onPress={handleBackPress}>
              <Image
                style={styles.iconBack}
                source={{
                  uri: 'https://img.icons8.com/ios/452/back--v1.png',
                }}
              />
            </TouchableOpacity>
            <Text style={styles.title}>SETTING</Text>
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('../../../res/assets/bell.png')}
          />
          <View style={styles.View2}>
            <Text style={styles.text1}>Thông báo</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
          <View style={styles.View3}>
            <Text style={styles.text1}>Cập Nhật</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
          <Image
            style={styles.logo2}
            source={require('../../../res/assets/setting2.png')}
          />
          <View style={styles.View2}>
            <Text style={styles.text1}>Chế Độ Tối</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
          <View style={styles.View3}>
            <Text style={styles.text1}>Ngôn ngữ</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.header}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              style={styles.iconBack}
              source={{
                uri: 'https://img.icons8.com/ios/452/back--v1.png',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>SETTING</Text>
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../../res/assets/bell.png')}
        />
        <View style={styles.View2}>
          <Text style={styles.text1}>Thông báo</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
        <View style={styles.View3}>
          <Text style={styles.text1}>Cập Nhật</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <Image
          style={styles.logo2}
          source={require('../../../res/assets/setting2.png')}
        />
        <View style={styles.View2}>
          <Text style={styles.text1}>Chế Độ Tối</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
        <View style={styles.View2}>
          <Text style={styles.text2}>Ngôn ngữ</Text>
          <Pressable style={styles.button}>
            <Text style={styles.text3}>Tiếng Việt</Text>
          </Pressable>
        </View>
        <View style={styles.View2}>
          <Text style={styles.text2}>Vị trí</Text>
          <Pressable style={styles.button}>
            <Text style={styles.text3}>Việt Nam</Text>
          </Pressable>
        </View>
      </View>
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
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  iconBack: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 40,
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    marginTop: 30,
    marginLeft: 20,
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  switch1: {
    marginLeft: 100,
  },
  View3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  logo2: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    marginTop: 100,
    marginLeft: 20,
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Late-Regular',
  },
  text3: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#818181',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'rgba(103,102,102,0.27)',
    width: 70,
    height: 30,
    borderColor: '#453C3C3C',
    borderWidth: 1,
    marginTop: 10,
  },
});

export default Settings;
