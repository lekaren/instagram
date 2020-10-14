import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function AddMediaTab () {
  return (
    <View style={styles.container}>
      <Text>AddMediaTab</Text>
    </View>
  );
};

export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});