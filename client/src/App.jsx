import React from 'react';
import './styles/App.sass';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        )
    }
}
