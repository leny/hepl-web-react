/* hepl-web/hepl-web.github.io
 *
 * ~/components/organisations/list.js - list of organisations component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import reqwest from "reqwest";

import OrganisationDetails from "./details";

export default class OrganisationsList extends Component {
    constructor( oProps ) {
        oProps.title = "Organisations";

        super( oProps );

        this.state = {
            "sections": [],
        };
    }

    componentDidMount() {
        reqwest( {
            "url": "./data/index.json",
            "method": "get",
            "type": "json",
        } ).then( ( aSections ) => {
            this.setState( {
                "sections": aSections,
            } );
        } );
    }

    generateBloc( { title, members } ) {
        return (
            <section className="organisations__bloc bloc">
                <h3 className="bloc__title">{ title }</h3>
                { members.map( ( oMember ) => <OrganisationDetails {...oMember} /> ) }
            </section>
        );
    }

    render() {
        return (
            <section className="main__section organisations">
                <h2 className="organisations__title">{ this.props.title }</h2>
                { this.state.sections.map( this.generateBloc.bind( this ) ) }
            </section>
        );
    }
}
