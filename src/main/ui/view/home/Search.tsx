import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const navigation = useNavigation();

  const recentSearches = ['Search 1', 'Search 2', 'Search 3'];
  const handleBackPress = () => {
    navigation.goBack();
  };

  // @ts-ignore
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
        <Text style={styles.title}>Tìm kiếm</Text>
      </View>
      <View style={styles.container2}>
        <Searchbar
          icon={() => <View />}
          clearIcon={() => (
            <Image
              source={{uri: 'https://img.icons8.com/ios/50/search--v1.png'}}
              style={{
                width: 20,
                height: 20,
              }}
            />
          )}
          placeholder="Tìm kiếm..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
          inputStyle={{
            textAlign: 'left',
            fontSize: 16,
            color: 'black',
            marginLeft: -30,
          }}
        />
        <Text style={styles.recentSearchTitle}>Tìm kiếm gần đây</Text>
        <FlatList
          data={recentSearches}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Text style={styles.recentSearchItem}>{item}</Text>
          )}
        />
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
  container2: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 16,
  },
  iconBack: {
    width: 24,
    height: 24,
  },
  recentSearchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 36,
    marginTop: 16,
  },
  searchResultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 36,
    marginTop: 16,
  },
  recentSearchItem: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 36,
    marginTop: 16,
  },
  searchResultItem: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 36,
    marginTop: 16,
  },
  searchBar: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 40,
  },
});

export default Search;
