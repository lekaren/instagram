import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function SearchTab () {
  return (
    <View style={styles.container}>
      <Text>SearchTab</Text>
    </View>
  );
};

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});