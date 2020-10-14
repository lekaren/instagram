import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ProfileTab () {
  return (
    <View style={styles.container}>
      <Text>ProfileTab</Text>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});