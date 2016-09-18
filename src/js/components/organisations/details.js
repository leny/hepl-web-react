/* hepl-web/hepl-web.github.io
 *
 * ~/components/organisations/details.js - details of an organisation component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
// import reqwest from "reqwest";

export default class OrganisationDetails extends Component {
    constructor( oProps ) {
        super( oProps );

        this.state = {};
    }

    componentDidMount() {
        console.log( `Fetch informations about ${ this.props.type } "${ this.props.path }" with GitHub API.` );
        // TODO
    }

    render() {
        return (
            <article>
                <h4>{ this.props.name }</h4>
            </article>
        );
    }
}
