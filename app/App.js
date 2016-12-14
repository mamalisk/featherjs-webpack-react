import React from 'react';
import styles from './App.css';
import StaticLineChart from './components/chartline';
import MongoLineChart from './components/mongoChartLine';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <StaticLineChart {...this.props} />
        <MongoLineChart {...this.props} />
      </div>
    );
  }

}
