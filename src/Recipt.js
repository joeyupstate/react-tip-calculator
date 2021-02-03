import React, { Component } from "react";
import "./Recipt.css";

class Recipt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      tip: "",
      total: "",
      service: "",
    };
  }

  handleAmountChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleServiceChange(event) {
    this.setState({
      service: event.target.value,
    });
  }

  makeTip() {
    let tipToBeAdded = parseFloat(
      this.state.value * this.state.service
    ).toFixed(2);
    this.setState({
      tip: tipToBeAdded,
      total: parseFloat(this.state.value) + parseFloat(tipToBeAdded),
    });
  }

  render() {
    return (
      <div className="recipt">
        <input
          type="text"
          value={this.state.value}
          className="input"
          onChange={this.handleAmountChange.bind(this)}
          placeholder="$"
        />
        <select
          name="service"
          className="service-input"
          onChange={this.handleServiceChange.bind(this)}
        >
          <option name="servicelevel" value="Pick Service">
            Service Level
          </option>
          <option name="excellent" value=".2">
            Excellent
          </option>
          <option name="good" value=".15">
            Good
          </option>
          <option name="ok" value=".1">
            Ok
          </option>
          <option name="bad" value="0">
            Bad
          </option>
        </select>

        <h1 className="tip"><span className="labels">Tip:$</span>{this.state.tip}</h1>
        <h1 className="total"><span className="labels">Total:$</span>{this.state.total}</h1>
        <div className="buttondiv" onClick={this.makeTip.bind(this)}>
          Generate Tip
        </div>
      </div>
    );
  }
}

export default Recipt;
