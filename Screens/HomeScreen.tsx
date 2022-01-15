import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const goToDetailScreen = () => navigation.navigate('Details');

  return (
    <View style={styles.container}>
      <Pressable onPress={goToDetailScreen}>
        <Text style={styles.text}>Go to Details Screen</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
