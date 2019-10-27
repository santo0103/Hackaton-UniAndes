import React, { useState } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import App from "../App";
//import FirstPage from "../pages/FirstPage";

const AppRouter = () => {
    const [login, setLogin] = useState(false);

    return (
        <Router>
            <App setLogin={setLogin.bind(this)} login={login}>
                {/* <Route
                    key="static"
                    path="/static"
                    render={props =>
                       login ? <FirstPage {...props} /> : <Redirect to="/" />
                }
                /> */}
            </App>
        </Router>
    );
};
export default AppRouter;
