/* hepl-web/hepl-web.github.io
 *
 * ~/components/organisations/details.js - details of an organisation component
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import reqwest from "reqwest";
import dateFormatter from "../../utils/date-formatter";

export default class OrganisationDetails extends Component {
    constructor( oProps ) {
        super( oProps );

        this.state = {
            "repos": 0,
        };
    }

    componentDidMount() {
        switch ( this.props.type ) {
            case "organisation":
                this.fetchOrganisationInfos();
                break;
            case "repository":
                this.fetchRepositoryInfos();
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
        } ).then( ( { avatar_url, html_url, public_repos } ) => {
            this.setState( {
                "avatar": `${ avatar_url }&s=100`,
                "repos": public_repos,
                "url": html_url,
            } );
        } );
    }

    fetchRepositoryInfos() {
        reqwest( {
            "url": `https://api.github.com/repos/${ this.props.path }`,
            "method": "get",
            "type": "json",
        } ).then( ( { html_url, owner, pushed_at } ) => {
            this.setState( {
                "avatar": `${ owner.avatar_url }&s=100`,
                "last_update": new Date( pushed_at ),
                "url": html_url,
            } );
        } );
    }

    render() {
        let oInfo,
            aClassNames = [
                "organisations__member",
                "organisation",
            ];

        if ( this.props.type === "organisation" ) {
            oInfo = <span>{ this.state.repos } dépôt{ this.state.repos > 1 && "s" }</span>;
        } else if ( this.props.type === "repository" && this.state.last_update ) {
            aClassNames.push( "organisation--repo" );
            oInfo = <span>Dernière mise à jour : { dateFormatter( this.state.last_update ) }</span>;
        }

        return (
            <article className={ aClassNames.join( " " ) }>
                <a className="organisation__link" href={ this.state.url }>
                    <h4 className="organisation__name">{ this.props.name }</h4>
                    <figure className="organisation__avatar">
                        <img className="organisation__img" src={ this.state.avatar } />
                    </figure>
                    <span className="organisation__path">{ this.props.path }</span>
                    <div className="organisation__infos">
                        { oInfo }
                    </div>
                </a>
            </article>
        );
    }
}
