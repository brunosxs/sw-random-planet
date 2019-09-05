import React from "react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import App from "../App";

const planetMockData = require("./planets.mock.data.json");

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("Info selection after button press", async () => {
  const fakeResponse = planetMockData[0];
  jest.spyOn(global, "fetch").mockImplementation(() => {
    const fetchResponse = {
      json: () => Promise.resolve(fakeResponse)
    };
    return Promise.resolve(fetchResponse);
  });

  await act(async () => {
    await ReactDOM.render(<App />, container);
  });
  const renderNoPlanetComponent = document.getElementById("render-no-planet");
  expect(renderNoPlanetComponent.textContent).toMatch(/generate button/);

  await act(async () => {
    const button = document.getElementsByTagName("button")[0];
    await button.click();
  });
  const infoSelection = document.getElementById("info-selection");
  expect(infoSelection.textContent).toMatch(/Basic info/);
});
