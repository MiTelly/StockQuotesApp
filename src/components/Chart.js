import React, { Component } from 'react';
const ReactHighcharts = require('react-highcharts');

class Chart extends Component {
  render() {
    const config = {
      chart: {
        width: 909,
        height: 500
      },
      title: {
        text: 'Symbol - ABCD'
      },
      subtitle: {
          text: '1 Year Chart'
      },
      xAxis: {
        title: {
          text: 'Month'
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      },
      yAxis: {
        title: {
          text: 'Price'
        }
      },
      series: [{
        showInLegend: false,
        data: [990, 1100, 1000, 875, 800, 700, 900, 988, 1008, 1133, 1200, 1000]
      }]
    };

    return <ReactHighcharts config={config} neverReflow />

  }
}

export default Chart;
