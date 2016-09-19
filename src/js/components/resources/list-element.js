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
        let aClasses = [ "resources__element", "resource" ],
            oPreview;

        if ( this.props.index === 0 ) {
            let oRemarkable = new Remarkable(),
                oPreviewContent = {
                    "__html": oRemarkable.render( this.props.preview ),
                };

            aClasses.push( "resource--with-preview" );
            oPreview = (
                <div className="resource__preview" dangerouslySetInnerHTML={ oPreviewContent }></div>
            );
        }

        return (
            <article className={ aClasses.join( " " ) }>
                <h3 className="resource__title">{ this.props.title }</h3>
                { oPreview }
                <Link className="resource__link" to={ `/articles/${ this.props.path }` }>Lire l'article</Link>
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
