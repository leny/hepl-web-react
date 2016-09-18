/* hepl-web/hepl-web.github.io
 *
 * ~/components/root.js - root container component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";

export default class RootContainer extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>hepl-web</h1>
                </header>
                <main>
                    { this.props.children }
                </main>
                <aside>kikoo!</aside>
                <footer>©2016</footer>
            </div>
        );
    }
}
