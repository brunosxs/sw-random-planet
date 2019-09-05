import React, { Component } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import Layout from "./components/layout";
import InfoSection from "./components/infoSection";
import SwLogo from "./svg/sw.svg";
import HistorySelector from "./components/historySelector";
import requestAddPlanet from "./utils/httpRequests";
import RenderNoPlanet from "./components/renderNoPlanet";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      selected: 0,
      planets: []
    };

    this.addPlanet = this.addPlanet.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.onClearButton = this.onClearButton.bind(this);
  }

  componentDidMount() {
    const planets = localStorage.getItem("planets");
    if (planets) {
      try {
        const planetsArray = JSON.parse(planets);
        this.setState({
          planets: planetsArray
        });
      } catch (e) {
        this.setState({ planets: [] });
      }
    } else {
      localStorage.setItem("planets", "");
    }
    this.setState({ hasLoaded: true });
  }

  onClearButton() {
    const { planets, selected } = { ...this.state };
    const lastSelected = planets[selected];
    this.setState({ planets: [lastSelected], selected: 0 });
    localStorage.setItem("planets", [lastSelected]);
    localStorage.setItem("selected", 0);
  }

  updateSelected(planetId) {
    this.setState({ selected: planetId });
  }

  async addPlanet() {
    this.setState({ hasLoaded: false });
    const planet = await requestAddPlanet();
    const { planets } = { ...this.state };
    planets.push(planet);
    this.setState({ planets });
    localStorage.setItem("planets", JSON.stringify(planets));
    this.setState({ hasLoaded: true, selected: planets.length - 1 });
  }

  render() {
    const { planets, selected, hasLoaded } = this.state;
    const planetsName = planets.map(planet => {
      return planet.name;
    });
    const planet = planets.length >= 1 ? planets[selected] : null;
    return (
      <Layout>
        <Grid item justify="center" container xs={12}>
          <img src={SwLogo} width="80%" alt="" style={{ marginTop: "2%" }} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          spacing={6}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Grid item xs={12}>
              <Typography align="center">Random Planet Selector</Typography>
              <Button
                disabled={!hasLoaded}
                onClick={this.addPlanet}
                variant="contained"
                fullWidth
                color="primary"
              >
                {hasLoaded ? "Get a random planet" : "Loading..."}
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            alignContent="center"
            justify="center"
            item
            spacing={6}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {planet ? <InfoSection planet={planet} /> : <RenderNoPlanet />}

            {planets.length > 1 ? (
              <HistorySelector
                planets={planetsName}
                selected={selected}
                onUpdateSelected={this.updateSelected}
                onClearButton={this.onClearButton}
              />
            ) : null}
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default App;
