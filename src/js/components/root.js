/* hepl-web/hepl-web.github.io
 *
 * ~/components/root.js - root container component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";

import Header from "./header";
export default class RootContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    { this.props.children }
                </main>
                <aside>kikoo!</aside>
                <footer>©2016</footer>
            </div>
        );
    }
}
