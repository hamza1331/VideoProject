/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
//  source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Video from 'react-native-video';

export default class App extends Component {
  render() {
    return (
<Video source={{uri: "https://vjs.zencdn.net/v/oceans.mp4"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
    )
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

