/* hepl-web/hepl-web.github.io
 *
 * ~/components/resources/details.js - details of a resource
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React, { Component } from "react";
import Remarkable from "remarkable";
import ResourcesList from "./list";
import ResourcesListElement from "./list-element";

export default class ResourceDetails extends Component {
    constructor( oProps ) {
        super( oProps );

        this.state = {
            "ready": false,
        };
    }

    componentDidMount() {
        // TODO: retreive author infos.
        // TODO: manage error (I know.)
        ResourcesList
            .getReqwestFor( this.props.params.articlePath, "html" )
            .then( this.parseContent.bind( this ) );
    }

    parseContent( sRawContent ) {
        let oRemarkable = new Remarkable(),
            { title, content } = ResourcesListElement.parseContent( sRawContent ),
            oParsedContent;

        // TODO: adjust content's titles levels

        oParsedContent = {
            "__html": oRemarkable.render( content ),
        };

        this.setState( {
            title,
            "content": oParsedContent,
            "ready": true,
        } );
    }

    render() {
        console.log( this.state );

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
