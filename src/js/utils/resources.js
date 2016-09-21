/* hepl-web/hepl-web.github.io
 *
 * ~/utils/resouces.js - Tools for resources manipulations
 *
 * coded by leny@flatLand!
 * started at 21/09/2016
 */

import Promise from "bluebird";
import reqwest from "reqwest";

let aResources,
    fLoadResources,
    fParseContent;

fLoadResources = function() {
    let fLoadResource, fSortingResources;

    if ( aResources ) {
        return Promise.resolve( aResources );
    }

    fLoadResource = function( oArticleInfos ) {
        return reqwest( {
            "headers": { "Accept": "application/vnd.github.raw" },
            "method": "get",
            "type": "html",
            "url": `https://api.github.com/repos/hepl-web/toolbox/contents/resources/${ oArticleInfos.path }`,
        } ).then( ( sRawContent ) => {
            let { author, date, path } = oArticleInfos,
                { title, content, preview } = fParseContent( sRawContent );

            return Promise.resolve( {
                author,
                content,
                "date": new Date( date ),
                path,
                preview,
                title,
            } );
        } );
    };

    fSortingResources = function( aUnsortedResources ) {
        aUnsortedResources.sort( ( { "date": dOne }, { "date": dTwo } ) => dTwo.getTime() - dOne.getTime() );

        return Promise.resolve( aUnsortedResources );
    };

    return new Promise( ( fResolve ) => {
        reqwest( {
            "headers": { "Accept": "application/vnd.github.raw" },
            "method": "get",
            "type": "json",
            "url": "https://api.github.com/repos/hepl-web/toolbox/contents/resources/index.json",
        } )
            .then( ( aResourcesList ) => Promise.map( aResourcesList, fLoadResource ).then( fSortingResources ) )
            .then( fResolve );
    } );
};

fParseContent = function( sRawContent ) {
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
};

export {
    fLoadResources as loadResources,
    fParseContent as parseContent,
};
