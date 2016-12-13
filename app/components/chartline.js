import React from 'react';
import {Line} from 'react-chartjs-2';
import ChartHeader from './chartHeader';

export default React.createClass({
  displayName: 'FX Line chart example',

  render() {
    return (
      <div>
          <ChartHeader />
          <Line data={this.props.fxData} />
      </div>
    )
  }
});
