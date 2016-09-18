/* hepl-web/hepl-web.github.io
 *
 * ~/components/organisations/details.js - details of an organisation component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import reqwest from "reqwest";

export default class OrganisationDetails extends Component {
    constructor( oProps ) {
        super( oProps );

        this.state = {
            "repos": 0,
        };
    }

    componentDidMount() {
        console.log( `Fetch informations about ${ this.props.type } "${ this.props.path }" with GitHub API.` );

        switch ( this.props.type ) {
            case "organisation":
                this.fetchOrganisationInfos();
                break;
            case "repository":
                // TODO
                break;
            default:
                // fails silently
                break;
        }
    }

    fetchOrganisationInfos() {
        reqwest( {
            "url": `https://api.github.com/orgs/${ this.props.path }`,
            "method": "get",
            "type": "json",
        } ).then( ( oOrganisationInfos ) => {
            this.setState( {
                "avatar": `${ oOrganisationInfos.avatar_url }&s=200`,
                "repos": oOrganisationInfos.public_repos,
                "url": oOrganisationInfos.html_url,
            } );
        } );
    }

    render() {
        return (
            <article>
                <a href={ this.state.url }>
                    <h4>{ this.props.name }</h4>
                    <figure>
                        <img src={ this.state.avatar } />
                    </figure>
                    <div className="infos">
                        <span>{ this.state.repos } dépôt{ this.state.repos > 1 && "s" }</span>
                    </div>
                </a>
            </article>
        );
    }
}
