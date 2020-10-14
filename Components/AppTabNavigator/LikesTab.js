import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function LikesTab () {
  return (
    <View style={styles.container}>
      <Text>LikesTab</Text>
    </View>
  );
};

export default LikesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});