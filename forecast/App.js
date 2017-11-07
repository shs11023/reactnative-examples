/**
 * Very Simple Forecast App
 * https://github.com/shs11023/reactnative-examples
 * @author David Seo (shs11023@gmail.com)
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';
import Forecast from './Forecast';

class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {  zip: '',
                    forecast: {
                        main: 'Clouds',
                        description: 'few clouds',
                        temp: 45.7
                    }
                  };
    // You can add addiotional state for initalizing.
  }

  _handleTextChange(event) {
      console.log(event.nativeEvent.text);
      this.setState({zip: event.nativeEvent.text});

      // Update states related forecast from server
      /*
        fetch('http://api.test.php?'+zip).then((resopnse)=> response.json()).then((responseJSON)=> {
          responseJSON.weather[0].main,
          ... blah blah

      })
      */
  }

  // https://facebook.github.io/react-native/docs/textinput.html
  render() {
    return (
      <View style={styles.container}>
        <Image  source={require('./flower.jpeg')}
                resizeMode='cover'
                style={styles.backdrop} />
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput  style={[styles.zipCode, styles.mainText]}
                            returnKeyType='go'
                            onSubmitEditing={(event) => this._handleTextChange(event)} />
              </View>
            </View>
            <Forecast   main={this.state.forecast.main}
                        description={this.state.forecast.description}
                        temp={this.state.forecast.temp} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop : {
    position: 'absolute'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: 16,
    padding: 0
  },
  mainText: {
    fontSize: 16,
    color: '#ffffff'
  }
});

export default App;
