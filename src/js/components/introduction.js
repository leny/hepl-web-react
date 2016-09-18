/* hepl-web/hepl-web.github.io
 *
 * ~/components/introduction.js - introduction component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import Remarkable from "remarkable";

export default class Introduction extends Component {
    constructor( oProps ) {
        let oRemarkable = new Remarkable(),
            sIntroduction = "Bienvenue sur le _microsite_ de la **Section Web**, qui a pour vocation de vous lister les organisations GitHub propres à chaque cours.";

        oProps.title = "Introduction";
        oProps.content = {
            "__html": oRemarkable.render( sIntroduction ),
        };

        super( oProps );
    }

    render() {
        return (
            <section className="main__section introduction">
                <h2 className="introduction__title">{ this.props.title }</h2>
                <div className="introduction__content" dangerouslySetInnerHTML={ this.props.content }></div>
            </section>
        );
    }
}
