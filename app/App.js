import React from 'react';
import styles from './App.css';
import LineChart from './components/chartline';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        <LineChart />
      </div>
    );
  }
}
