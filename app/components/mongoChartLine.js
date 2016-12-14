import React from 'react';
import {Line} from 'react-chartjs-2';
import ChartHeader from './chartHeader';
import axios from 'axios';

const labels = ['GBPUSD'];

const getRate = data => {
  return data.map(d => d.rate)
}

const getLabels = data => {
  return data.map(d => d.timestamp)
}

const template = {
  label: 'FX Data',
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10
};

const getDataSet = (data) => {
  const dataSet = {...template};
  dataSet.data = getRate(data);
  return dataSet;
}


export default class MongoChartLine extends React.Component {
  constructor(props){
    super(props);
    const labels = ['GBPUSD'];

    this.state = {
      fxData : {
          labels,
          datasets : [
            getDataSet([1.223333])
          ]
      }
    }
  }

  componentWillMount() {
    axios.get('/fxdata').then(result => {
       console.log(result);
       const singleData = {
           labels : getLabels(result.data),
           datasets : [
             getDataSet(result.data)
           ]
       }
       console.log(singleData);
       console.log(JSON.stringify(singleData));
       this.setState({ fxData : singleData });
    });
  }

  componentDidMount() {
    console.log(`State is ${this.state}`);
    console.log(`State is ${this.state.fxdata}`);
  }

  render() {



    return (
      <div>
          <ChartHeader title="Mongo Chart Line"/>
          <Line data={this.state.fxData} />
      </div>
    )
  }

}
