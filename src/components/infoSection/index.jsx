import React, { Component } from "react";
import { Card, Grid, Paper, CardContent, Typography } from "@material-ui/core";

export default class InfoSection extends Component {
  renderMoviesList() {
    const { planet } = this.props;
    return (
      <Grid item>
        <Paper>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Typography>Movies</Typography>
                  {planet.films.length === 0 ? (
                    <Typography align="center">No movies</Typography>
                  ) : (
                    planet.films.map(movie => {
                      return <p> - {movie.title}</p>;
                    })
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    );
  }

  render() {
    const { planet } = this.props;
    return (
      <Grid container spacing={2} id="info-selection">
        <Grid item md={8}>
          <Paper>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <Typography variant="h6">Basic info</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      <strong>Name: {planet.name || ""}</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Rotation Period:</Typography>
                    <Typography variant="caption">
                      {planet.rotation_period || ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Orbital Period: </Typography>
                    <Typography variant="caption">
                      {planet.orbital_period || ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Diameter:</Typography>
                    <Typography variant="caption">
                      {planet.diameter || ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Climate:</Typography>
                    <Typography variant="caption">
                      {planet.climate || ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Gravity:</Typography>
                    <Typography variant="caption">
                      {planet.gravity || ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Terrain:</Typography>
                    <Typography variant="caption">
                      {planet.terrain || ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Surface Water:</Typography>
                    <Typography variant="caption">
                      {planet.surface_water || ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Population:</Typography>
                    <Typography variant="caption">
                      {planet.population || ""}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}>
          {this.renderMoviesList()}
        </Grid>
      </Grid>
    );
  }
}
