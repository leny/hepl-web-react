/* hepl-web/hepl-web.github.io
 *
 * ~/components/resources/list.js - list of ressources component
 *
 * coded by leny@flatLand!
 * started at 19/09/2016
 */

import React, { Component } from "react";
import reqwest from "reqwest";
import Remarkable from "remarkable";
import Promise from "bluebird";

import ResourcesListElement from "./list-element";

export default class ResourcesList extends Component {
    constructor( oProps ) {
        let oRemarkable = new Remarkable(),
            aIntroductionLines = [
                "Les _ressources_ sont de courts articles destinés à vous présenter un langage, une technique ou tout autre aspect intéressant pour les apprentis _travailleurs du web_ que vous êtes.",
                "Une sorte de _blog technique_ de l'équipe.  ",
                "Ces articles sont tirés du dossier [resources](https://github.com/hepl-web/toolbox/tree/master/resources) du _repository_ [hepl-web/toolbox](https://github.com/hepl-web/toolbox/). Si vous avez une ressource intéressante à partager, n'hésitez pas à faire une _Pull Request_ !",
            ];

        oProps.title = "Ressources";
        oProps.introduction = {
            "__html": oRemarkable.render( aIntroductionLines.join( "\n" ) ),
        };

        super( oProps );

        this.state = {
            "resources": [],
        };
    }

    componentDidMount() {
        // TODO: extract this in store component
        ResourcesList.getReqwestFor( "index.json" )
            .then( this.buildIndex.bind( this ) );
    }

    buildIndex( aArticlesList = [] ) {
        Promise
            .each( aArticlesList, ( oArticleInfos ) => (
                ResourcesList
                    .getReqwestFor( oArticleInfos.path, "html" )
                    .then( ( sRawContent ) => {
                        oArticleInfos.content = sRawContent;

                        return oArticleInfos;
                    } )
            ) )
            .then( ( aAugmentedArticlesList ) => {
                let aResources;

                aResources = aAugmentedArticlesList.map( ( { author, content, date, path } ) => ( {
                    author,
                    content,
                    "date": new Date( date ),
                    path,
                } ) );

                aResources.sort( ( oA, oB ) => oA.date.getTime() - oB.date.getTime() );

                this.setState( {
                    "resources": aResources,
                } );
            } );
    }

    render() {
        let aRessources = [];

        aRessources = this.state.resources.map( ( oArticle, iIndex ) => (
            <ResourcesListElement index={ iIndex } { ...oArticle } />
        ) );

        return (
            <section className="main__section resources">
                <h2 className="resources__title">{ this.props.title }</h2>
                <div className="resources__explain" dangerouslySetInnerHTML={ this.props.introduction }></div>
                <hr className="resources__separator" />
                { aRessources }
            </section>
        );
    }

    static getReqwestFor( sPath, sType = "json" ) {
        return reqwest( {
            "url": `https://api.github.com/repos/hepl-web/toolbox/contents/resources/${ sPath }`,
            "method": "get",
            "type": sType,
            "headers": {
                "Accept": "application/vnd.github.raw",
            },
        } );
    }
}
