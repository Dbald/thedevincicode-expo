import React from 'react';
import { Image } from 'react-native';

export default class VideoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/vheader.png')}
        style={{
          width: '100%',
          height: '100%',
       }}
      />
    );
  }
}