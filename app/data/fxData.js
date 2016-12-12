const labels = ['Jan','Feb','Mar','Apr','May','June','July'];
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

const datasets = [
  [65, 59, 80, 81, 56, 55, 40],
  [32, 80, 59, 81, 44, 20, 19],
  [11, 80, 59, 81, 44, 20, 19]
]

const getDataSet = (index) => {
  const dataSet = {...template};
  dataSet.data = datasets[index];
  return dataSet;
}


export const data = [
  {
      labels,
      datasets : [
        getDataSet(0)
      ]
  },
  {
      labels,
      datasets : [
        getDataSet(1)
      ]
  },
  {
      labels,
      datasets : [
        getDataSet(2)
      ]
  },
];
