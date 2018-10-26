import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PodcastTitle from '../assets/img components/podcast';
export default class PodcastScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <PodcastTitle/>,
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
