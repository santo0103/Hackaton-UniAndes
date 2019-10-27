import React from "react";
import Link from "@material-ui/core/Link";
import mummie from "../img/mummie.gif";
import daft from "../img/daft.gif";
import caballero from "../img/caballero.gif";
import ramona from "../img/ramona.gif";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        width: "80%"
    },
    box: {
        margin: "10px",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgba(201, 76, 76, 0.5)",
            borderRadius: "5%"
        }
    },
    menuText: {
        marginBottom: "50px",
        color: "#fff",
        fontSize: "30px",
        margin: "10px",
        boxShadow: "0px 2px 0px #fff"
    },
    text: {
        color: "#fff",
        fontSize: "15px",
        padding: "15px",
        textAlign: "center"
    }
}));

const Characters = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.menuText}>Personajes</h1>
            <Grid container>
                <Grid item xs className={classes.box}>
                    <Link
                        onClick={() => {
                            props.setCharacters(!props.characters);
                        }}
                    >
                        <Box>
                            <img width="120px" src={mummie} alt="mummie" />
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs className={classes.box}>
                    <Link
                        onClick={() => {
                            props.setCharacters(!props.characters);
                        }}
                    >
                        <Box>
                            <img width="120px" src={daft} alt="daft" />
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs className={classes.box}>
                    <Box>
                        <Link
                            onClick={() => {
                                props.setCharacters(!props.characters);
                            }}
                        >
                            <img
                                width="120px"
                                src={caballero}
                                alt="caballero"
                            />
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs className={classes.box}>
                    <Box>
                        <Link
                            onClick={() => {
                                props.setCharacters(!props.characters);
                            }}
                        >
                            <img width="120px" src={ramona} alt="ramona" />
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs>
                    <h1 className={classes.text}>Momia</h1>
                </Grid>
                <Grid item xs>
                    <h1 className={classes.text}>El men de daft punk</h1>
                </Grid>
                <Grid item xs>
                    <h1 className={classes.text}>Caballero</h1>
                </Grid>
                <Grid item xs>
                    <h1 className={classes.text}>Ramona Flowers</h1>
                </Grid>
            </Grid>
        </div>
    );
};
export default Characters;
