import React, { useState } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import frame from "../img/FrameNintendo.png";
import bg from "../img/bg.jpg";
import bg2 from "../img/static.gif";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import FirstPage from "../pages/FirstPage";
import Characters from "../pages/Characters";
import Mission from "../pages/Mission";
import Const from "../pages/Const";
import Tangram from "../pages/Tangram";
import Zoom from "@material-ui/core/Zoom";
import Column from "antd/lib/table/Column";

const pregunta11 = "Que constelacion es tu favorita?";
const pregunta12 = "Por que las estrellas cambias su posicion en el cielo?";
const pregunta13 = "A que se deben los eclipses?";

const pregunta21 = "Que son atomos?";
const pregunta22 =
    "Por que las sustancias adquieren colores, olores y sabores diferentes";
const pregunta23 =
    "cuanto es el minimo de pasos para resolver una torre de hanoy";

const pregunta31 = "Hace cuantos años se extinguieron los dinosaurios?";
const pregunta32 = "de que color eran los T rex";
const pregunta33 = "Que otros tipos de dinosaurios habian en esa epoca";

const pregunta41 =
    "Cuantos diferentes instrumentos puede llegar a tener una orquesta";
const pregunta42 = "Cuál es la diferencia entre un chelo y un violin";
const pregunta43 = "para que sirve un taladro";

const pregunta51 = "por que es importante el numero pi en matematicas";
const pregunta52 = "cuantos lados tiene un Dado";
const pregunta53 = "Para que sirven las tablas de multilicar";

const preguntas = {
    constelaciones: [pregunta11, pregunta12, pregunta13],
    hanoy: [pregunta21, pregunta22, pregunta23],
    tangram: [pregunta31, pregunta32, pregunta33],
    instrumentos: [pregunta41, pregunta42, pregunta43],
    secuencias: [pregunta51, pregunta52, pregunta53]
};

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            //backgroundColor: "#f0f2f5",
            background: "linear-gradient(to right bottom, #430089, #82ffa1)"
        }
    },

    content: {
        position: "relative",
        top: "50%",
        left: "5%",
        width: "90%",
        height: "100vh" /* Magic here */,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    frame: {
        zIndex: "1",
        position: "absolute",
        width: "100%"
    },
    bg: {
        zIndex: "0",
        position: "absolute",
        width: "60%"
    },
    menu: {
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
        //position: "absolute",
        //top: '5%',
        //width: "70%"
    },
    menuTitle: {
        zIndex: "1",
        //position: "absolute",
        padding: "10px",
        color: "#fff",
        fontSize: "40px",
        boxShadow: "4px 4px 2px #fff"
    },
    menuText: {
        zIndex: "1",
        //position: "absolute",
        color: "#fff",
        fontSize: "20px",
        margin: "10px",
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

const Header = () => {
    const classes = useStyles();
    const [instructions, setInstructions] = useState(false);
    const [characters, setCharacters] = useState(false);
    const [mission, setMission] = useState(false);
    const [conste, setConste] = useState(false);
    const [hanoi, setHanoi] = useState(false);
    const [tangram, setTangram] = useState(false);
    const [instrument, setInstrument] = useState(false);
    const [secuence, setSecuence] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    var [art, setArt] = useState(0);
    var [ing, setIng] = useState(0);
    var [send, setSend] = useState(0);
    var [counter, setCounter] = useState(0);
    var [points, setPoints] = useState(0);

    const badAns = () => {
        alert("Incorrecto");
        if (counter === 0) setPoints(points - 5);
    };

    const goodAns = () => {
        alert("Correcto");
        if (counter === 0) {
            setPoints(points + 10);
            setCounter(counter + 1);
        } else if (counter === 1) {
            setIsCorrect(!isCorrect);
        }
    };

    const sendQuestion = (juego, numeroPregunta) => {
        if (
            (juego === "constelaciones" && numeroPregunta === 0) ||
            (juego === "hanoy" && numeroPregunta === 1) ||
            (juego === "tangram" && numeroPregunta === 1) ||
            (juego === "instrumentos" &&
                (numeroPregunta === 0 || numeroPregunta))
        ) {
            setArt(art++);
        } else {
            setIng(ing++);
        }
        setSend(send++);
        return preguntas[juego][numeroPregunta];
    };

    return (
        <Zoom in={true}>
            <div className={classes.content}>
                <div className={classes.frame}>
                    <img width="100%" height="110%" src={frame} alt="frame" />
                </div>
                <div className={classes.bg}>
                    <img width="110%" src={bg2} alt="bg" />
                </div>

                {!instructions &&
                    !characters &&
                    !mission &&
                    !conste &&
                    !tangram && (
                        <div className={classes.menu}>
                            <h1 className={classes.menuTitle}>DAVINCI</h1>
                            <br></br>
                            <Link
                                onClick={() => {
                                    setInstructions(!instructions);
                                }}
                                className={classes.menuText}
                            >
                                Introducción
                            </Link>
                            <br></br>
                            <Link
                                onClick={() => {
                                    setCharacters(!characters);
                                }}
                                className={classes.menuText}
                            >
                                Personajes
                            </Link>
                            <br></br>
                            <Link
                                onClick={() => {
                                    setMission(!mission);
                                }}
                                className={classes.menuText}
                            >
                                Misiones
                            </Link>
                        </div>
                    )}
                {instructions && (
                    <div className={classes.menu}>
                        <FirstPage
                            setInstructions={setInstructions.bind(this)}
                            instructions={instructions}
                        />
                    </div>
                )}
                {characters && (
                    <div className={classes.menu}>
                        <Characters
                            setCharacters={setCharacters.bind(this)}
                            characters={characters}
                        />
                    </div>
                )}
                {mission && !conste && !tangram && (
                    <div className={classes.menu}>
                        <Mission
                            setMission={setMission.bind(this)}
                            mission={mission}
                            setConste={setConste.bind(this)}
                            conste={conste}
                            setTangram={setTangram.bind(this)}
                            tangram={tangram}
                        />
                    </div>
                )}
                {conste && (
                    <div className={classes.menu}>
                        <Const
                            setMission={setMission.bind(this)}
                            mission={mission}
                            setConste={setConste.bind(this)}
                            conste={conste}
                            goodAns={goodAns.bind()}
                            badAns={badAns.bind()}
                        />
                    </div>
                )}
                {tangram && (
                    <div className={classes.menu}>
                        <Tangram
                            setMission={setMission.bind(this)}
                            mission={mission}
                            setTangram={setTangram.bind(this)}
                            tangram={tangram}
                        />
                    </div>
                )}
            </div>
        </Zoom>
    );
};

export default withRouter(Header);
