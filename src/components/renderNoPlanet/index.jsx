import React from "react";
import { Typography, Paper, Card, Grid, CardContent } from "@material-ui/core";

export default function RenderNoPlanet() {
  return (
    <Grid item id="render-no-planet">
      <Paper>
        <Card>
          <CardContent>
            <Typography align="center">Hit the generate button</Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
}
