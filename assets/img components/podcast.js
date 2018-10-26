import React from 'react';
import { Image } from 'react-native';

export default class PodcastTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/pheader.png')}
        style={{
          width: '100%',
          height: '100%',
       }}
      />
    );
  }
}