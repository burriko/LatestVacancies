'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ActivityIndicatorIOS,
} = React;

class LoadingActivity extends React.Component {
  render() {
    return (
      <ActivityIndicatorIOS
        style={[styles.centering, {height: 80, marginTop: 100}]}
        size="large"/>
    );
  }
}

var styles = StyleSheet.create({
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginTop: 100
  }
});

module.exports = LoadingActivity;
