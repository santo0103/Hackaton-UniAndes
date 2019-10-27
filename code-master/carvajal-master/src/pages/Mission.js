import React from "react";
import "../index.css";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    box: {
        margin: "15px",
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

const Mission = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.menuText}>Misiones</h1>
            <Grid container>
                <Grid item xs className={classes.box}>
                    <Link
                        onClick={() => {
                            props.setConste(!props.conste);
                        }}
                    >
                        <Box
                            border={4}
                            borderRadius={"5%"}
                            borderColor={"#fff"}
                        >
                            <h1 className={classes.text}>Constelaciones</h1>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs className={classes.box}>
                    <Link
                        onClick={() => {
                            props.setMission(!props.mission);
                        }}
                    >
                        <Box
                            border={4}
                            borderRadius={"5%"}
                            borderColor={"#fff"}
                        >
                            <h1 className={classes.text}>Hanoi</h1>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs className={classes.box}>
                    <Link
                        onClick={() => {
                            props.setTangram(!props.tangram);
                        }}
                    >
                        <Box
                            border={4}
                            borderRadius={"5%"}
                            borderColor={"#fff"}
                        >
                            <h1 className={classes.text}>Tangram</h1>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs className={classes.box}>
                    <Link
                        onClick={() => {
                            props.setMission(!props.mission);
                        }}
                    >
                        <Box
                            border={4}
                            borderRadius={"5%"}
                            borderColor={"#fff"}
                        >
                            <h1 className={classes.text}>Instrumentos</h1>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs className={classes.box}>
                    <Link
                        onClick={() => {
                            props.setMission(!props.mission);
                        }}
                    >
                        <Box
                            border={4}
                            borderRadius={"5%"}
                            borderColor={"#fff"}
                        >
                            <h1 className={classes.text}>Secuencias</h1>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Mission;
