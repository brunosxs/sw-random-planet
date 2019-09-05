import React from "react";
import {
  Typography,
  Grid,
  Container,
  CardContent,
  Paper,
  Card
} from "@material-ui/core";
import "./header.css";

export default function Header() {
  return (
    <Container>
      <Grid container spacing={4} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper>
            <Card>
              <CardContent>
                <Typography align="center" variant="h6">
                  Star Wars Random Planet Selector{" "}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
