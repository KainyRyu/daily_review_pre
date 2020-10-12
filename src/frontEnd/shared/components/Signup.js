import React, { useState } from "react";
import {
  Typography,
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import firebase from "../utils/firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const styles = (theme) => ({
    main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
    },
    },
    form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    },
    submit: {
    marginTop: theme.spacing.unit * 3,
    },
});

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSubmit = e => {
  //     e.preventDefault()
  //     firebase
  //         .firestore()
  //         .collection("account")
  //         .add({
  //             name,
  //             email,
  //             password,
  //         })
  //         .then(() => setName(""), setEmail(""), setPassword(""))
  // }
  return (
    <form onSubmit={(e) => e.preventDefault() && false}>
      <Typography component="h1" variant="h5">
        Register Account
      </Typography>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          name="name"
          autoComplete="off"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          name="email"
          autoComplete="off"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          name="password"
          autoComplete="off"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={onRegister}
      >
        Submit
      </Button>
    </form>
  );
  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
};
export default withRouter(withStyles(styles)(Signup));
