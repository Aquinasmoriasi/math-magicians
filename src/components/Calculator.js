import React, { useState } from 'react';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, newInput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    e.preventDefault();
    const targetBtn = e.target.value;
    const evaluate = calculate(state, targetBtn);
    newInput(evaluate);
  };

  const { total, next, operation } = state;

  return (
    <form action="#">
      <div className="output">
        {!total && !next && !operation ? 0 : [total, operation, next]}
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="button" onClick={handleClick} value="AC" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="+/-" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="%" />
            </td>
            <td className="last-column">
              <input type="button" onClick={handleClick} value="&#247;" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" onClick={handleClick} value="7" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="8" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="9" />
            </td>
            <td className="last-column">
              <input type="button" onClick={handleClick} value="x" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" onClick={handleClick} value="4" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="5" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="6" />
            </td>
            <td className="last-column">
              <input type="button" onClick={handleClick} value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" onClick={handleClick} value="1" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="2" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="3" />
            </td>
            <td className="last-column">
              <input type="button" onClick={handleClick} value="+" />
            </td>
          </tr>
          <tr className="last-row">
            <td>
              <input type="button" onClick={handleClick} value="0" />
            </td>
            <td>
              <input type="button" onClick={handleClick} value="." />
            </td>
            <td className="last-column">
              <input type="button" onClick={handleClick} value="=" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Calculator;
