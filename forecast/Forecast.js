/**
 * Very Simple Forecast App
 * https://github.com/shs11023/reactnative-examples
 * @author David Seo (shs11023@gmail.com)
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Forecast extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          {this.props.main}
        </Text>
        <Text style={styles.description}>
          {this.props.description}
        </Text>
        <Text style={styles.temp}>
          {this.props.temp}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  main: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  temp: {
    flex: 2,
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default Forecast;
