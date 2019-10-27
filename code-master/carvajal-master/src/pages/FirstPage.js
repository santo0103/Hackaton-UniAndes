import React from "react";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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
        textAlign: "left",
        lineHeight: "2",
        backgroundColor: "rgba(255, 255, 255, 0.3)"
    },
    back: {
        color: "#fff",
        fontSize: "15px",
        padding: "15px",
        textAlign: "justify",
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

const FirstPage = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.menuText}>Introducción</h1>
            <p className={classes.text}>
                La malla curricular estática creada a <br></br>
                principios del siglo XX ya no es aplicable <br></br>a nuestro
                nuevo mundo.<br></br>
                ¿Por qué seguimos insistiendo en desmembrar<br></br>
                en partes desiguales las disciplinas escolares <br></br>
                cuando hoy lo que necesitamos es compartir, <br></br>
                desarmar y volver a armar?<br></br>
            </p>
            <Link
                onClick={() => {
                    props.setInstructions(!props.instructions);
                }}
            >
                <h1 className={classes.back}>Volver</h1>
            </Link>
        </div>
    );
};

export default FirstPage;
