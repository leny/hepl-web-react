/* hepl-web/hepl-web.github.io
 *
 * ~/components/root.js - root container component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
import Introduction from "./introduction";

export default class RootContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    { this.props.children }
                    <Introduction />
                </main>
                <aside>kikoo!</aside>
                <Footer />
            </div>
        );
    }
}
