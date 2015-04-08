'use strict';

var React = require('react-native');
var VacancyList = require('./VacancyList');
var LoadingActivity = require('./LoadingActivity');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var LatestVacancies = React.createClass({

  getInitialState() {
    return { vacancies: {}, refresher: false }
  },

  componentDidMount() {
    this.fetchVacancies();
  },

  fetchVacancies() {
    fetch('https://internal.ncl.ac.uk/careers/students/vacsonline/vacancies/feed.json?limit=200')
      .then(response => response.json())
      .then(json => this._handleResponse(json))
      .catch(error => {
        console.log(error);
        React.AlertIOS.alert(
          'Error',
          'There seems to be an issue loading the vacancies',
          [
             {text: 'OK'},
             {text: 'Try again', onPress: () => this.refreshVacancies()},
          ]
        );
      });
  },

  refreshVacancies() {
    this.refs.nav.resetTo(this._defaultRoute(LoadingActivity));
    this.fetchVacancies();
  },

  _defaultRoute(component) {
    return {
      title: 'Latest Vacancies',
      backButtonTitle: 'Vacancies',
      rightButtonTitle: 'Refresh',
      onRightButtonPress: () => this.refreshVacancies(),
      component: component,
      passProps: { vacancies: this.state.vacancies },
      vacancies: this.state.vacancies
    };
  },

  _handleResponse(response) {
    this.setState({ vacancies: response });
    this.refs.nav.resetTo(this._defaultRoute(VacancyList));
  },

  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.container}
        refresher={this.state.refresher}
        initialRoute={this._defaultRoute(LoadingActivity)}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('LatestVacancies', () => LatestVacancies);
