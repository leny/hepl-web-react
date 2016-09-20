/* hepl-web/hepl-web.github.io
 *
 * ~/components/footer.js - footer component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import reqwest from "reqwest";

const STARTING_YEAR = 2016;

export default class Footer extends Component {
    constructor( oProps ) {
        let iCurrentYear = ( new Date() ).getFullYear();

        oProps.copy = `©${ STARTING_YEAR }`;

        if ( iCurrentYear > STARTING_YEAR ) {
            oProps.copy += `-${ iCurrentYear }`;
        }

        super( oProps );

        this.state = {
            "designer": null,
        };
    }

    componentDidMount() {
        reqwest( {
            "url": "./data/designer.json",
            "method": "get",
            "type": "json",
        } ).then( ( { name, url } ) => {
            let $designer = ( <span className="footer-copy__designer">
                design by
                { " " }
                <a href={ url }>{ name }</a>
            </span> );

            this.setState( {
                "designer": $designer,
            } );
        } );
    }

    render() {
        return (
            <footer className="footer">
                <h2 className="footer__title">Avant de nous quitter…</h2>

                <div className="footer-links footer__links">
                    <a className="footer-links__link" href="http://www.provincedeliege.be/hauteecole" rel="external">HEPL</a>
                    { " " }
                    <span className="footer-links__separator"></span>
                    { " " }
                    <a className="footer-links__link" href="https://ecolevirtuelle.provincedeliege.be" rel="external">École Virtuelle</a>
                </div>

                <div className="footer-copy footer__copy">
                    <small>
                        <span className="footer-copy__code">
                            { this.props.copy }
                            { " " }
                            <a className="footer-copy__link" href="https://hepl-web.github.io">hepl-web</a>
                        </span>
                        { this.state.designer ? ", " : "" }
                        { this.state.designer }
                    </small>
                </div>
            </footer>
        );
    }
}
