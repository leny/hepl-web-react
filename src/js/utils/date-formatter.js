/* hepl-web/hepl-web.github.io
 *
 * ~/utils/date-formatter.js - Simple french date formatter
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

const MONTHS = [
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
];

let fAddLeadingZero;

fAddLeadingZero = function( iNumber ) {
    return `${ iNumber < 10 ? "0" : "" }${ iNumber }`;
};

export default function( dGivenDate = null ) {
    let dDate = dGivenDate instanceof Date ? dGivenDate : new Date(),
        aDateParts = [],
        iDay = dDate.getDate();

    aDateParts.push( `${ iDay }${ iDay === 1 ? "er" : "" }` );
    aDateParts.push( MONTHS[ dDate.getMonth() ] );
    aDateParts.push( dDate.getFullYear() );
    aDateParts.push( "à" );
    aDateParts.push( `${ fAddLeadingZero( dDate.getHours() ) }h${ fAddLeadingZero( dDate.getMinutes() ) }` );

    return aDateParts.join( " " );
}
