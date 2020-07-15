import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";

class LightRope extends React.Component {
  render() {

    const nrOfBulbs = 40;
    const bulbBody = <li></li>;

    return (
      <div className={'my-extension'}>
        <ul className="lightrope">
          {Array(nrOfBulbs).fill(bulbBody)}
        </ul>
      </div>
    )
  }
}

const app = document.createElement('div');
app.id = "xmas-lights-extension-root";
document.body.appendChild(app);
ReactDOM.render(<LightRope/>, app);