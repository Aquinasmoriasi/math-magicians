import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    const targetBtn = e.target.value;
    const evaluate = calculate(this.state, targetBtn);
    this.setState(evaluate);
  }

  render() {
    const { total, next } = this.state;
    return (
      <form action="#">
        <input type="text" value={total || next || 0} readOnly />
        <table>
          <tbody>
            <tr>
              <td>
                <input type="button" onClick={this.handleClick} value="AC" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="+/-" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="%" />
              </td>
              <td className="last-column">
                <input type="button" onClick={this.handleClick} value="&#247;" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" onClick={this.handleClick} value="7" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="8" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="9" />
              </td>
              <td className="last-column">
                <input type="button" onClick={this.handleClick} value="x" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" onClick={this.handleClick} value="4" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="5" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="6" />
              </td>
              <td className="last-column">
                <input type="button" onClick={this.handleClick} value="-" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" onClick={this.handleClick} value="1" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="2" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="3" />
              </td>
              <td className="last-column">
                <input type="button" onClick={this.handleClick} value="+" />
              </td>
            </tr>
            <tr className="last-row">
              <td>
                <input type="button" onClick={this.handleClick} value="0" />
              </td>
              <td>
                <input type="button" onClick={this.handleClick} value="." />
              </td>
              <td className="last-column">
                <input type="button" onClick={this.handleClick} value="=" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}
