/* hepl-web/hepl-web.github.io
 *
 * ~/components/header.js - header component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import { Link } from "react-router";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">
                    <Link className="header__link" to="/">
                        <abbr className="header__school" title="Haute École de la Province de Liège">HEPL</abbr>
                        { " " }
                        <strong className="header__bachelor">Bachelier en Techniques Graphiques</strong>
                        { " " }
                        <span className="header__bachelor-suffix">Orientation Techniques Infographiques</span>
                        { " " }
                        <em className="header__section">Section Web</em>
                    </Link>
                </h1>
            </header>
        );
    }
}
