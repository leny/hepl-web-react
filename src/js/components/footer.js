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
            let $designer = ( <span className="copy__designer">
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
                <div className="links footer__links">
                    <a className="links__link" href="http://www.provincedeliege.be/hauteecole" rel="external">HEPL</a>
                    { " " }
                    <span className="links__separator"></span>
                    { " " }
                    <a className="links__link" href="https://ecolevirtuelle.provincedeliege.be" rel="external">École Virtuelle</a>
                </div>

                <div className="copy footer__copy">
                    <small>
                        <span className="copy__code">
                            { `${ this.props.copy }, ` }
                            <a className="copy__link" href="https://hepl-web.github.io">hepl-web</a>
                        </span>
                        { this.state.designer ? ", " : "" }
                        { this.state.designer }
                    </small>
                </div>
            </footer>
        );
    }
}
