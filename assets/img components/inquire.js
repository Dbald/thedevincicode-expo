import React from 'react';
import { Image } from 'react-native';

export default class InquireTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/iheader.png')}
        style={{
          width: '100%',
          height: '100%',
       }}
      />
    );
  }
}
