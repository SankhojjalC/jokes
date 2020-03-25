import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const styles = {
  root: {
    minWidth: 200,
    maxWidth: 200,
    margin: 20
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 150
  }
};


class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDisplay: false
    }
  }


  handleClick = () => {
    this.setState({ toDisplay: !this.state.toDisplay })
  }
  render() {
    return (
      <Card className={this.props.classes.root} >
        <CardContent>
          <div>
            <Typography variant="h5" component="h2">
              {this.props.jokesList.setup}
            </Typography>
          </div>

          {this.state.toDisplay === true ?
            <div>
              <Typography variant="body2" component="p" />
              {this.props.jokesList.punchline}
            </div> : null}

        </CardContent>
        <CardActions className={styles.pos.marginBottom}>
          <Button size="medium" onClick={this.handleClick}>Learn More</Button>
        </CardActions>
      </Card>
    );
  }
};

export default withStyles(styles)(Cards);