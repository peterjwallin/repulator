import React, { Component } from 'react';
import './App.css';
import NumericLabel from 'react-pretty-numbers';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        amount: "",
        size: "300000000",
        fee: "2",
        active: "85",
        pe: "15.4"
    };
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeFee = this.handleChangeFee.bind(this);
    this.handleChangeActive = this.handleChangeActive.bind(this);
    this.handleChangePE = this.handleChangePE.bind(this);
  }

  handleChangeAmount(event) {
    this.setState({amount: event.target.value});
  }

  handleChangeSize(event) {
    this.setState({size: event.target.value});
  }

  handleChangeFee(event) {
    this.setState({fee: event.target.value});
  }

  handleChangeActive(event) {
    this.setState({active: event.target.value});
  }

  handleChangePE(event) {
    this.setState({pe: event.target.value});
  }

  render() {

    var currencyFormat = {
          'justification':'L',
          'locales':'en-US',
          'currency':true,
          'currencyIndicator':'USD',
          'percentage':false,
          'precision':2,
          'wholenumber':null,
          'commafy':true,
          'shortFormat':false,
          'shortFormatMinValue': 1000000,
          'shortFormatPrecision': 1,
          'title':true,
          'cssClass':['red']
    };

    const rep = {
      amount: this.state.amount,
      size: this.state.size,
      fee: this.state.fee,
      active: this.state.active,
      pe: this.state.pe,
      total_fees: ((this.state.size*(this.state.fee*0.01) / (11000000*(this.state.active*0.01)) * 0.5) * this.state.amount),
      market_value: (((this.state.size*(this.state.fee*0.01) / (11000000*(this.state.active*0.01)) * 0.5) * this.state.pe) * this.state.amount),
      rep_price: ((this.state.size*(this.state.fee*0.01) / (11000000*(this.state.active*0.01)) * 0.5) * this.state.pe)
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src="/index.png" className="App-logo" alt="logo" />
          <h2>Repulator</h2>
          <h3><i>REP Earnings Calculator</i></h3>
        </div>
        <p/>
        <div>
          <table className="Table">
            <tbody>
              <tr>
                <td className="Column1">
                  <div>
                    <b>Number Of REPS You Own:</b>
                  </div>
                </td>
                <td className="Column2">
                  <div>
                    <input type="text" placeholder="# of REP Tokens You Own" maxLength={8} value={this.state.amount} onChange={this.handleChangeAmount} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="Column1">
                  <div>
                    <b>Total Annual Trading Volume ($):</b>
                  </div>
                </td>
                <td className="Column2">
                  <div>
                    <input type="text" placeholder="Annual Trading Volume ($)" maxLength={15} value={this.state.size} onChange={this.handleChangeSize} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="Column1">
                  <div>
                    <b>Average Trading Fee (%):</b>
                  </div>
                </td>
                <td className="Column2">
                  <div>
                      <input type="text" placeholder="2" maxLength={3} value={this.state.fee} onChange={this.handleChangeFee} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="Column1">
                  <div>
                    <b>% Of REPS That Are Active (%):</b>
                  </div>
                </td>
                <td className="Column2">
                  <div>
                    <input type="text" placeholder="85" maxLength={3} value={this.state.active} onChange={this.handleChangeActive} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="Column1">
                  <div>
                    <b>Price / Earnings Ratio:</b>
                  </div>
                </td>
                <td className="Column2">
                  <div>
                    <input type="text" placeholder="15.4" maxLength={6} value={this.state.pe} onChange={this.handleChangePE} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="Column1"><hr/></td>
                <td className="Column2"><hr/></td>
              </tr>
              <tr>
                <td className="Column1">
                  <div>
                    <b>Annual Revenue From Your REPS:</b>
                  </div>
                </td>
                <td className="Results">
                  <NumericLabel params={currencyFormat}>{rep.total_fees}</NumericLabel>
                </td>
              </tr>
              <tr>
                <td className="Column1">
                  <div>
                    <b>Fair Market Value Of Your REPS:</b>
                  </div>
                </td>
                <td className="Results">
                  <NumericLabel params={currencyFormat}>{rep.market_value}</NumericLabel>
                </td>
              </tr>
              <tr>
                <td className="Column1">
                  <div>
                    <b>Fair Price Per REP:</b>
                  </div>
                </td>
                <td className="Column2">
                  <NumericLabel params={currencyFormat}>{rep.rep_price}</NumericLabel>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*
        <div className="Footer">
            <p>ETH Donation: 0x8fC3277e847542fa8d328bF949EA18caEe1a9FbF</p>
            <p>BTC Donation: 14C9vdRZFSfb4zv6kgHw2XLqS4D96up3AG</p>
        </div>
        */}
      </div>
    );
  }

}

export default App;
