import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default funcition App() {
  return (
    <View style={styles.container}>
      <Text>Sujeito Programador</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})