import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://192.168.68.112:5000/';
class HomeScreen extends Component {
  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);
    console.log('componentDidMount: ');

    socket.on('connect', function () {
      console.log('get temperature');
      socket.emit('get temperature', {data: "I'm connected!"});
    });

    socket.on('temperature', data => {
      console.log('temperature: ', data);
    });
  }

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
