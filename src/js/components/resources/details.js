/* hepl-web/hepl-web.github.io
 *
 * ~/components/resources/details.js - details of a resource
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import Remarkable from "remarkable";
import { loadResources } from "../../utils/resources";

export default class ResourceDetails extends Component {
    constructor( oProps ) {
        super( oProps );

        this.state = {
            "ready": false,
        };
    }

    componentDidMount() {
        let sQueryPath = this.props.params.articlePath;

        loadResources().then( ( aResources ) => {
            let oResource;

            oResource = aResources.find( ( { path } ) => path === sQueryPath );

            if ( !oResource ) {
                console.error( "Unknown resource." ); // TODO: manage this (I know.)

                return;
            }

            this.parseContent( oResource );
        } );
    }

    parseContent( oResource ) {
        let oRemarkable = new Remarkable(),
            { title, content, author, date } = oResource;

        // TODO: adjust content's titles levels

        this.setState( {
            author,
            "content": {
                "__html": oRemarkable.render( content ),
            },
            date,
            "ready": true,
            title,
        } );
    }

    render() {
        if ( !this.state.ready ) {
            return (
                <article className="resource resource--details">
                    <div className="resource__loading">chargement...</div>
                </article>
            );
        }

        return (
            <article className="resource resource--details">
                <h2 className="resource__title">{ this.state.title }</h2>
                <div className="resource__content" dangerouslySetInnerHTML={ this.state.content }></div>
            </article>
        );
    }
}
