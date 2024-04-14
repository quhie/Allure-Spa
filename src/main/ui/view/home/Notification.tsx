import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Notification: React.FC = () => {
  const navigation = useNavigation();

  const renderNotifications = () => {
    // Replace this with your actual notification data
    const notifications = [
      {
        id: 1,
        date: 'Jan 01, 2022',
        image: require('././assets/imgChamSocDaMat.png'),
        title: 'Đặt hàng thành công',
        serviceName: 'Massage djasndjasd',
        place: '3 chỗ',
      },
      {
        id: 2,
        date: 'Jan 02, 2023',
        image: require('././assets/imgChamSocDaMat.png'),
        title: 'Đặt hàng thành công',
        serviceName: 'Massage djasndjasd',
        place: '3 chỗ',
      },
    ];

    return notifications.map(notification => (
      <View key={notification.id} style={styles.notificationContainer}>
        <Text style={styles.dateText}>{notification.date}</Text>
        <View style={styles.notificationContent}>
          <Image style={styles.notificationImage} source={notification.image} />
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <View style={styles.notificationService}>
              <Text style={styles.notificationText}>Dịch vụ: </Text>
              <Text style={styles.serviceName}>{notification.serviceName}</Text>
            </View>
            <Text style={styles.notificationText}>{notification.place}</Text>
          </View>
        </View>
      </View>
    ));
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress}>
          <Image
            style={styles.iconBack}
            source={{
              uri: 'https://img.icons8.com/ios/452/back--v1.png',
            }}
          />
        </Pressable>
        <Text style={styles.title}>Thông Báo</Text>
      </View>
      <View style={styles.container2}>{renderNotifications()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 56,
    elevation: 4,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  iconBack: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    right: 160,
  },
  backButton: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  notificationNull: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  notificationNullText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#B0ACAC',
  },
  notificationList: {
    marginTop: 32,
  },
  notificationContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  notificationContent: {
    flexDirection: 'row',
    marginTop: 16,
  },
  notificationImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EDC06C',
  },
  notificationService: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 14,
    color: '#B0ACAC',
    fontWeight: 'bold',
  },
  serviceName: {
    fontSize: 14,
    color: '#B0ACAC',
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default Notification;
