import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Router
import { withRouter } from "react-router-dom";
// Material UI Components
import {
  Paper,
  Button,
  FormControl,
  Typography,
  Avatar,
  CssBaseline,
  TextField
} from "@material-ui/core";
import ErrorDialog from "./ErrorDialog";
// Icons
import LockIcon from "@material-ui/icons/LockOutlined";
//Style
import signinStyle from "./signinStyle";
import { withStyles } from "@material-ui/core/styles";
// Context API
import { WithAppContext } from "../../appContext";

const INITIAL_STATE = {
  email: "admin@gmail.com",
  password: "root",
  error: null,
  openDialog: false
};

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  dialogPromptOpen = message => {
    this.setState({
      openDialog: true,
      error: message
    });
  };

  dialogClose = () => {
    this.setState({ openDialog: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, context } = this.props;
    // const isInvalid = this.state.password === "" || this.state.email === "";

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.container}>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockIcon />
              </Avatar>
              <Typography variant="headline">Sign in</Typography>
              <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    autoFocus
                    autoComplete="email"
                    type="email"
                    name="email"
                    id="email"
                    label="Email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    autoComplete="current-password"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </FormControl>
                <Button
                  fullWidth
                  className={classes.submit}
                  // disabled={isInvalid}
                  variant="contained"
                  onClick={context.logIn}
                  type=""
                  color="primary"
                >
                  Sign in
                </Button>
              </form>
            </Paper>
            <ErrorDialog
              error={this.state.error}
              openDialog={this.state.openDialog}
              dialogClose={this.dialogClose}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default WithAppContext(withRouter(withStyles(signinStyle)(SignInPage)));
