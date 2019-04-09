import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class Codebare extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '20%' , background: '#00CCCC' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Codebare;