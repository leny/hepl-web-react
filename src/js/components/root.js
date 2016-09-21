/* hepl-web/hepl-web.github.io
 *
 * ~/components/root.js - root container component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import { Link } from "react-router";

import Header from "./header";
import Footer from "./footer";
import Introduction from "./introduction";
import OrganisationsList from "./organisations/list";
import ResourcesList from "./resources/list";
import LinksList from "./links/list";

export default class RootContainer extends Component {
    render() {
        let oMain;

        if ( this.props.children ) {
            oMain = (
                <main className="main">
                    <div className="main__backlink-container">
                        <Link to="/">retour à la liste des ressources</Link>
                    </div>
                    { this.props.children }
                </main>
            );
        } else {
            oMain = (
                <main className="main">
                    <Introduction />
                    <OrganisationsList />
                    <ResourcesList />
                </main>
            );
        }

        return (
            <div>
                <Header />
                { oMain }
                <LinksList />
                <Footer />
            </div>
        );
    }
}
