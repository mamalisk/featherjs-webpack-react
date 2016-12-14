import React from 'react';
import {Line} from 'react-chartjs-2';
import ChartHeader from './chartHeader';

export default React.createClass({
  displayName: 'StaticLineExample',

  render() {
    return (
      <div>
          <ChartHeader title="Static data" />
          <Line data={this.props.fxData} />
      </div>
    )
  }
});
