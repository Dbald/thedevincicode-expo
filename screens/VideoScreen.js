import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import VideoTitle from '../assets/img components/videos';
export default class VideoScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <VideoTitle />,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#0094B2',
  },
});
