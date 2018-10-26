import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InquireTitle from '../assets/img components/inquire';
import { SocialIcon } from 'react-native-elements';
export default class InquireScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <InquireTitle />,
  };

  render() {
    const media = () => {
      return 'https://www.instagram.com/itsdevinci/';
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Have questions/suggestions about the podcast and/or YouTube channel?</Text>
          <SocialIcon style={styles.buttons}
            title='Follow TDC on Instagram'
            button
            light
            type='instagram'
            onPress={media}
          />
          <SocialIcon style={styles.buttons}
            title='Follow TDC on Facebook'
            button
            type='facebook'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0094B2',
  },
  title: {
    width: '90%',
    marginBottom: 2,
  },
  buttons: {
    width: '90%',
  }
});