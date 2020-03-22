import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 200,
    margin: 20
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

let Cards = props => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Typography variant="h5" component="h2">
            {props.jokesList.setup}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" component="p" />
          {props.jokesList.punchline}
        </div>
      </CardContent>
      {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  );
};

export default Cards;