import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {publicRoutes} from "./routes";
import {ReactSVG} from "react-svg";
import ElcalcLogo from "../assets/svgs/elcalcLogo.svg";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <div className="container">
            <ReactSVG className="logo" src={ElcalcLogo} />
            <Switch>
                { publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact />
                ) }
                <Redirect to={HOME_ROUTE} />
            </Switch>
        </div>
    );
};

export default AppRouter;