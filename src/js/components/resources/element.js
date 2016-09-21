/* hepl-web/hepl-web.github.io
 *
 * ~/components/resources/element.js - list element of ressources component
 *
 * coded by leny@flatLand!
 * started at 19/09/2016
 */

import React, { Component } from "react";
import { Link } from "react-router";
import Remarkable from "remarkable";
import dateFormatter from "../../utils/date-formatter";

export default class ResourcesListElement extends Component {
    render() {
        let oRemarkable = new Remarkable(),
            oPreviewContent = {
                "__html": oRemarkable.render( this.props.preview ),
            };

        return (
            <article className="resources__element resource">
                <h3 className="resource__title">
                    <Link className="resource__title-link" to={ `/articles/${ this.props.path }` }>{ this.props.title }</Link>
                </h3>
                <div className="resource__preview" dangerouslySetInnerHTML={ oPreviewContent }></div>
                <div className="resource__infos">
                    { "Par " }
                    <a className="resource__author" href={ this.props.author.url } rel="external">{ this.props.author.name }</a>
                    { ", le " }
                    <time datetime={ this.props.date }>{ dateFormatter( this.props.date ) }</time>
                </div>
                <div className="resource__read">
                    <Link className="resource__read-link" to={ `/articles/${ this.props.path }` }>(lire la suite)</Link>
                </div>
            </article>
        );
    }
}
