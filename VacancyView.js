'use strict';

var React = require('react-native');
var {
	StyleSheet,
	View,
	Text,
} = React;

var VacancyView = React.createClass({
	render() {
		var vacancy = this.props.route.passprops.vacancy;

		return (
			<View style={styles.container}>
				<Text>{vacancy.title}</Text>
				<Text>{vacancy.location}</Text>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		marginTop: 80,
		padding: 20
	}
})

module.exports = VacancyView;