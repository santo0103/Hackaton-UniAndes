import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "../img/logo.gif";

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            // backgroundColor: "#f0f2f5"
            background: "linear-gradient(to right bottom, #430089, #82ffa1)",
            marginBottom: theme.spacing(20),
        }
    },
    paper: {
        marginTop: theme.spacing(15),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "30px",
        boxShadow: "2px 2px 5px #ccc",
        borderRadius: "5px"
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        padding: "10px",
        background: "#3B47B3",
        margin: theme.spacing(4, 0, 1)
    },

    notchedOutline: {},

    focused: {
        "& $notchedOutline": {
            borderColor: "#505F75!important"
            //borderColor: "#ccc!important",
        }
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

const SignIn = props => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.logo}>
                    <img width="100%" src={logo} alt="logo" />
                </div>
                <Typography
                    style={{
                        fontSize: "26px"
                    }}
                >
                    Bienvenido a DaVinci!
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                            }
                        }}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        //id="email"
                        label="Email"
                        //placeholder="Ejemplo@email.com"
                        value={props.user}
                        autoFocus
                        onChange={e =>
                            props.updateParentState({
                                user: e.target.value
                            })
                        }
                        onKeyDown={e => {
                            if (e.key === "Enter") props.onPressLogin();
                        }}
                    />
                    <TextField
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                            }
                        }}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Contraseña"
                        type="password"
                        value={props.password}
                        autofocus
                        onChange={e =>
                            props.updateParentState({
                                password: e.target.value
                            })
                        }
                        onKeyDown={e => {
                            if (e.key === "Enter") props.onPressLogin();
                        }}
                    />
                    {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                    <Button
                        //type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={props.onPressLogin}
                    >
                        Ingresar
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default SignIn;
