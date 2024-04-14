import React, {useState} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.checkbox}
      onPress={() => setChecked(!checked)}>
      <Image
        style={styles.image}
        source={
          checked
            ? {
                uri: 'https://img.icons8.com/parakeet/48/000000/checked-checkbox.png',
              }
            : {uri: 'https://img.icons8.com/ios/50/unchecked-checkbox.png'}
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default CustomCheckbox;
