import React from "react";
import Link from "@material-ui/core/Link";
import caballero from "../img/caballero.gif";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        width: "50%"
    },
    box: {
        margin: "15px",
        width: "80%",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgba(90, 160, 250, 0.5)",
            borderRadius: "5%"
        }
    },
    boxQuestion: {
        width: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: "5px"
    },
    menuText: {
        marginBottom: "20px",
        color: "#fff",
        fontSize: "30px",
        margin: "10px",
        boxShadow: "0px 2px 0px #fff"
    },
    text: {
        color: "#fff",
        fontSize: "15px",
        padding: "15px",
        textAlign: "justify",
        lineHeight: "1.5"
    },
    textAnswer: {
        color: "#fff",
        fontSize: "15px",
        padding: "15px",
        textAlign: "left",
        lineHeight: "1"
    }
}));

const Const = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.menuText}>Constelaciones</h1>
            {<Grid container>
                <Grid item className={classes.boxQuestion}>
                    <Box>
                        <p className={classes.text}>
                            Pregunta: ¿A que se deben los eclipses?
                        </p>
                        <img width="120px" src={caballero} alt="daft" />
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box className={classes.box}>
                        <Link
                            onClick={() => {
                                props.BadAns();
                                props.setMission(!props.mission);
                                props.setConste(!props.conste);
                            }}
                        >
                            <p className={classes.textAnswer}>A. Depende del tipo de eclipse</p>
                        </Link>
                    </Box>
                    <Box className={classes.box}>
                        <Link
                            onClick={() => {
                                props.goodAns();
                                props.setMission(!props.mission);
                                props.setConste(!props.conste);
                            }}
                        >
                            <p className={classes.textAnswer}>B. Es un fenómeno en el que la luz procedente de 
                            un cuerpo celeste es bloqueada por otro</p>
                        </Link>
                    </Box>
                    <Box className={classes.box}>
                        <Link
                            onClick={() => {
                                props.badAns();
                                props.setMission(!props.mission);
                                props.setConste(!props.conste);
                            }}
                        >
                            <p className={classes.textAnswer}>C. Mágia</p>
                        </Link>
                    </Box>
                </Grid>
            </Grid>}
        </div>
    );
};
export default Const;
