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

describe("Button states", () => {
  const fakeResponse = planetMockData[0];
  jest.spyOn(global, "fetch").mockImplementation(() => {
    const fetchResponse = {
      json: () => Promise.resolve(fakeResponse)
    };
    return Promise.resolve(fetchResponse);
  });

  test("Button disabled when fetching data", async () => {
    await act(async () => {
      await ReactDOM.render(<App />, container);
    });
    const button = document.getElementsByTagName("button")[0];
    await button.click();
    expect(button.getAttribute("disabled")).not.toBeUndefined();
  });
});
