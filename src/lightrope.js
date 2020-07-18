import React from "react";

export default class LightRope extends React.Component {
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