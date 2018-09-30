/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import WallPaperManager from 'react-native-wallpaper-manager';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  setAsWallpaper(image) {
    WallPaperManager.setWallpaper(image, (response) => {
      if(response.status == 'success') alert('success')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1}}>
            <Image source={require('./assets/flower.jpeg')} style={{height: 200, width: 200}} resizeMode="contain" />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              style={{backgroundColor: 'powderblue', padding: 5}}
              onPress={() => this.setAsWallpaper(require('./assets/flower.jpeg'))} >
                <Text>Set as wallpaper</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1}}>
            <Image source={require('./assets/sunflower.jpeg')} style={{height: 200, width: 200}} resizeMode="contain" />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              style={{backgroundColor: 'powderblue', padding: 5}}
              onPress={() => this.setAsWallpaper(require('./assets/sunflower.jpeg'))} >
                <Text>Set as wallpaper</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
