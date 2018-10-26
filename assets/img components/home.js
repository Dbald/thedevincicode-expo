import React from 'react';
import { Image } from 'react-native';

export default class HomeTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/header.png')}
        style={{
          width: '100%',
          height: '100%',
       }}
      />
    );
  }
}


