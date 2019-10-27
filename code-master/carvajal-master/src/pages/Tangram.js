import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import tangram from "../img/tangram.gif";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    box: {
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "&:hover": {
            cursor: "pointer"
        }
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
        lineHeight: "1.5",
        width: "320px"
    }
}));

const Tangram = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.menuText}>Tangram</h1>
            <Grid container>
                <Grid item xs className={classes.box}>
                    <Box>
                        <Link
                            onClick={() => {
                                props.setMission(!props.mission);
                                props.setTangram(!props.tangram);
                            }}
                        >
                            <img width="350px" src={tangram} alt="tangram" />
                        </Link>
                    </Box>
                    <Box>
                        <p className={classes.text}>
                            Los dinosaurios son un grupo de saurópsidos​​ que
                            aparecieron durante el período Triásico. Aunque el
                            origen exacto y su diversificación temprana es tema
                            de activa investigación, ​ el consenso científico
                            actual sitúa su origen entre 231 y 243 millones de
                            años atrás.
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};
export default Tangram;
