import React from 'react';
import {Line} from 'react-chartjs-2';

export default React.createClass({
  displayName: 'FX Line chart example',

  render() {
    return (
      <div>
          <h2>Fx Line example</h2>
          <Line data={this.props.fxData} />
      </div>
    )
  }
});
