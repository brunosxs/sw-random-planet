import React from "react";
import { Grid, Container } from "@material-ui/core";

export default function Layout(props) {
  const { children } = props;
  return (
    <Container>
      <Grid item container md={12} spacing={2} justify="center">
        {children}
      </Grid>
    </Container>
  );
}
