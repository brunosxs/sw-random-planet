import React, { Component } from "react";
import {
  Typography,
  Paper,
  Card,
  Grid,
  Button,
  CardContent,
  Select,
  MenuItem
} from "@material-ui/core";

export default class HistorySelector extends Component {
  constructor(props) {
    super(props);
    this.onUpdateSelected = this.onUpdateSelected.bind(this);
  }

  onUpdateSelected(event) {
    const selected = event.target.value;
    const { onUpdateSelected } = this.props;
    onUpdateSelected(selected);
  }

  render() {
    const { planets, selected, onClearButton } = this.props;
    return (
      <Grid
        item
        container
        spacing={4}
        alignItems="center"
        id="history-selector"
      >
        <Paper>
          <Card>
            <CardContent>
              <Grid item container spacing={4} justify="space-around">
                <Grid item>
                  <Typography variant="h6">History</Typography>
                  <Select
                    name="selectPrevious"
                    value={selected}
                    fullWidth
                    onChange={this.onUpdateSelected}
                  >
                    {planets.map((name, i) => {
                      return (
                        <MenuItem value={i} key={i.toString()}>
                          {name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Grid>
                <Grid item>
                  <Button onClick={onClearButton} variant="contained">
                    Clear history
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    );
  }
}
