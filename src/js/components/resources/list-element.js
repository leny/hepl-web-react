/* hepl-web/hepl-web.github.io
 *
 * ~/components/resources/list-element.js - list element of ressources component
 *
 * coded by leny@flatLand!
 * started at 19/09/2016
 */

import React, { Component } from "react";
import { Link } from "react-router";
import Remarkable from "remarkable";

export default class ResourcesListElement extends Component {
    constructor( oProps ) {
        Object.assign( oProps, ResourcesListElement.parseContent( oProps.content ) );
        super( oProps );
    }

    render() {
        let oRemarkable = new Remarkable(),
            oPreviewContent = {
                "__html": oRemarkable.render( this.props.preview ),
            };

        return (
            <article className="resources__element resource">
                <h3 className="resource__title">
                    <Link to={ `/articles/${ this.props.path }` }>{ this.props.title }</Link>
                </h3>
                <div className="resource__preview" dangerouslySetInnerHTML={ oPreviewContent }></div>
                <div className="resource__link-container">
                    <Link className="resource__link" to={ `/articles/${ this.props.path }` }>(lire la suite)</Link>
                </div>
            </article>
        );
    }

    static parseContent( sRawContent ) {
        let rTitleCheck = /^##\s?(.+)$/i,
            aLines, iTitleIndex, sTitle, sPreview;

        // remove first line
        aLines = sRawContent.split( "\n" ).slice( 1 );

        // extract title (first second-rank markdown title)
        iTitleIndex = aLines.findIndex( ( sLine ) => rTitleCheck.test( sLine ) );
        sTitle = aLines.splice( iTitleIndex, 1 )[ 0 ].replace( rTitleCheck, "$1" );

        // extract preview (first non-empty line)
        sPreview = aLines.filter( ( sLine ) => sLine.trim() )[ 0 ];

        return {
            "content": aLines.join( "\n" ),
            "preview": sPreview,
            "title": sTitle,
        };
    }
}
