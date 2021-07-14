import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.temperature__container}>
        <Text style={styles.temperature__title}>Temperatura</Text>
        <Text style={styles.temperature__text}>24 º</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  temperature__container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature__title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.blackPearl,
    textAlign: 'center',
  },
  temperature__text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.blackPearl,
    textAlign: 'center',
  },
});

export default HomeScreen;
