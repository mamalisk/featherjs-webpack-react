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

const defaultDataSets = [
  [65, 59, 80, 81, 56, 55, 40],
  [32, 80, 59, 81, 44, 20, 19],
  [11, 92, 33, 22, 11, 91, 77]
]

const getDataSet = (index) => {
  const dataSet = {...template};
  dataSet.data = defaultDataSets[index];
  return dataSet;
}

export const data = defaultDataSets.map((ds,i)=> {
   return {
       labels,
       datasets : [
         getDataSet(i)
       ]
   }
});
