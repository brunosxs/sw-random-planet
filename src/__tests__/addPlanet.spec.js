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

describe("HistorySelector component integration", () => {
  const fakeResponse = planetMockData[0];
  jest.spyOn(global, "fetch").mockImplementation(() => {
    const fetchResponse = {
      json: () => Promise.resolve(fakeResponse)
    };
    return Promise.resolve(fetchResponse);
  });

  test("Show HistorySelector after 2 successfull fetches", async () => {
    await act(async () => {
      await ReactDOM.render(<App />, container);
    });
    const button = document.getElementsByTagName("button")[0];
    await act(async () => {
      await button.click();
    });
    await act(async () => {
      await button.click();
    });
    const historySelector = document.getElementById("history-selector");
    expect(historySelector.textContent).toMatch(/Clear history/);
  });

  test("Hide HistorySelector if clear button is pressed", async () => {
    await act(async () => {
      await ReactDOM.render(<App />, container);
    });
    const button = document.getElementsByTagName("button")[0];
    await act(async () => {
      await button.click();
      await button.click();
    });
    const historySelector = document.getElementById("history-selector");
    expect(historySelector.textContent).toMatch(/Clear history/);
    const clearButton = historySelector.getElementsByTagName("button")[0];
    await act(async () => {
      await clearButton.click();
    });

    expect(document.getElementById("history-selector")).toBeNull();
  });
});
