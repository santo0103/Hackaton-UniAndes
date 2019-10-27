import React from "react";
// import "antd/dist/antd.css";
import { Layout } from "antd";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import firebase from "./firebase";

class AppLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password: ""
        };
    }

    onPressLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.user, this.state.password)
            .then(
                () => {
                    //alert('Correcto');
                    this.props.setLogin({ login: true });
                },
                error => {
                    if (this.state.user === "") alert("Ingrese usuario");
                    if (this.state.password === "") alert("Ingrese contraseña");
                    else {
                        alert("Usuario o contraseña incorrectos");
                        this.setState({ user: "", password: "" });
                    }
                }
            );
    };

    updateState = data => {
        this.setState(data);
    };

    render() {
        return (
            <Layout
                style={{
                    height: "100%",
                }}
            >
                {this.props.login ? (
                    <Header />
                ) : (
                    <SignIn
                        updateParentState={this.updateState.bind(this)}
                        onPressLogin={this.onPressLogin.bind(this)}
                        user={this.state.user}
                        password={this.state.password}
                    />
                )}
                <Layout.Content>{this.props.children}</Layout.Content>
            </Layout>
        );
    }
}

const App = (props) => <AppLayout setLogin={props.setLogin.bind(this)} login={props.login}>{props.children}</AppLayout>;

export default App;