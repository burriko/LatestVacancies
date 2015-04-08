'use strict';

var React = require('react-native');
var VacancyView = require('./VacancyView');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} = React;

var VacancyList = React.createClass({

  _vacancyPressed(vacancy) {
    this.props.navigator.push({
      title: 'Vacancy',
      component: VacancyView,
      vacancy: vacancy,
      passprops: {vacancy: vacancy}
    })
  },

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
        onPress={() => this._vacancyPressed(rowData.Vacancy)}
        underlayColor='#dddddd'>
        <View style={styles.listItem}>
          <View style={styles.itemContent}>
            <Text style={styles.title} numberOfLines={1}>{rowData.Vacancy.title}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.Vacancy.id !== r2.Vacancy.id});
    var dataSource = ds.cloneWithRows(this.props.vacancies);

    return (
      <ListView
        ref="vacancyList"
        dataSource={dataSource}
        renderRow={this.renderRow}/>
    );
  }
});

var styles = StyleSheet.create({
  listItem: {
    paddingLeft: 20,
    paddingRight: 0,
  },
  itemContent: {
    paddingTop: 16,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 20,
    height: 48
  },
  title: {
    fontSize: 15,
    paddingBottom: 10,
    color: '#353535'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

module.exports = VacancyList;
