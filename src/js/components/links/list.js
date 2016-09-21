/* hepl-web/hepl-web.github.io
 *
 * ~/components/links/list.js - list of links component
 *
 * coded by leny@flatLand!
 * started at 21/09/2016
 */

import React, { Component } from "react";
import reqwest from "reqwest";

export default class LinksList extends Component {
    constructor( oProps ) {
        super( oProps );

        this.state = {
            "sections": [],
        };
    }

    componentDidMount() {
        reqwest( {
            "headers": { "Accept": "application/vnd.github.raw" },
            "method": "get",
            "type": "html",
            "url": `https://api.github.com/repos/hepl-web/toolbox/contents/links/README.md`,
        } ).then( this.parseLinks.bind( this ) );
    }

    parseLinks( sRawContent ) {
        let aLines = sRawContent.split( "\n" ),
            aSections = [],
            oCurrentSection,
            rTitleCheck = /^##\s(.+)$/i,
            rLinkCheck = /^(?:\*|-)\s\[(.+)\]\((.+)\)\s-\s(.+)$/i;

        // exclude raw introduction
        aLines = aLines.slice( aLines.findIndex( ( sLine = "" ) => sLine.trim() === "* * *" ) );

        aLines.forEach( ( sRawLine ) => {
            let sLine = sRawLine.trim();

            if ( !sLine ) {
                return;
            }

            if ( rTitleCheck.test( sLine ) ) {
                oCurrentSection && aSections.push( oCurrentSection );

                oCurrentSection = {
                    "title": sLine.replace( rTitleCheck, "$1" ),
                    "links": [],
                };
            }

            if ( rLinkCheck.test( sLine ) ) {
                let [ , name, url, description ] = sLine.match( rLinkCheck );

                oCurrentSection.links.push( { name, url, description } );
            }
        } );

        aSections.push( oCurrentSection );

        this.setState( {
            "sections": aSections,
        } );
    }

    generateSection( { title, links } ) {
        return (
            <section className="side-links__section">
                <h3 className="side-links__section-name">{ title }</h3>
                <ul className="side-links__list">
                    { links.map( this.generateLink.bind( this ) ) }
                </ul>
            </section>
        );
    }

    generateLink( { name, url, description } ) {
        return (
            <li className="side-links__list-element">
                <a className="side-links__link" href={ url } title={ description } target="_new">{ name }</a>
            </li>
        );
    }

    render() {
        let oSections;

        if ( this.state.sections.length > 1 ) {
            oSections = this.state.sections.map( this.generateSection.bind( this ) );
        } else {
            oSections = ( <div className="side-links__loading">chargement…</div> );
        }

        return (
            <aside className="side-links">
                <h2 className="side-links__title">Liens</h2>
                <p className="side-links__introduction">Quelques liens utiles ou incontournables.</p>
                { oSections }
            </aside>
        );
    }
}
