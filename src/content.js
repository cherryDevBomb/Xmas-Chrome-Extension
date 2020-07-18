import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";
import LightRope from "./lightrope";

/*global chrome*/

const app = document.createElement('div');
app.id = "xmas-lights-extension-root";
document.body.appendChild(app);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      toggleLights();
    }
  }
);

function toggleLights() {
  app.style.display = (app.style.display === "none") ? "block" : "none";
}

ReactDOM.render(<LightRope/>, app);
