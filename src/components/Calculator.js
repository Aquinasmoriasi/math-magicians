import React from 'react';

export default function Calculator() {
  return (
    <form action="#">
      <input type="text" value="0" />
      <table>
        <tbody>
          <tr>
            <td>
              <input type="button" value="AC" />
            </td>
            <td>
              <input type="button" value="+/-" />
            </td>
            <td>
              <input type="button" value="%" />
            </td>
            <td className="last-column">
              <input type="button" value="&#247;" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="7" />
            </td>
            <td>
              <input type="button" value="8" />
            </td>
            <td>
              <input type="button" value="9" />
            </td>
            <td className="last-column">
              <input type="button" value=" &times;" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="4" />
            </td>
            <td>
              <input type="button" value="5" />
            </td>
            <td>
              <input type="button" value="6" />
            </td>
            <td className="last-column">
              <input type="button" value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="1" />
            </td>
            <td>
              <input type="button" value="2" />
            </td>
            <td>
              <input type="button" value="3" />
            </td>
            <td className="last-column">
              <input type="button" value="+" />
            </td>
          </tr>
          <tr className="last-row">
            <td>
              <input type="button" value="0" />
            </td>
            <td>
              <input type="button" value="." />
            </td>
            <td className="last-column">
              <input type="button" value="=" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
