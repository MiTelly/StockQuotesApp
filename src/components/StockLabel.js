import React, { Component } from 'react';

class StockLabel extends Component {

  render() {
    let divStyle2 = {
      backgroundColor: '#e6ffff',
      width: 600,
      height: 100,
      fontSize: 35,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTop: '3px solid black',
      borderLeft: '3px solid black',
      borderBottom: '3px solid black'
      }

    return (
      <div style={divStyle2} >
        Stock Symbol - 'ABCD'
      </div>
    );
  }
}

export default StockLabel;
