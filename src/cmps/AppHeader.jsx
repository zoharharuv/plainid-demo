import { Component } from "react";
import logo from '../assets/img/plainid-logo-white.png'

export class AppHeader extends Component {
    render() {
        return (
            <header className="app-header flex align-center">
                <img src={logo} alt="PlainId" />
                <h1>PlainID- Demo App</h1>
            </header>
        )
    }
}