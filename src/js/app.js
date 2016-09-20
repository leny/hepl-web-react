/* hepl-web/hepl-web.github.io
 *
 * ~/app.js - main entry point
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import RootContainer from "./components/root";
import ResourceDetails from "./components/resources/details";

render(
    <Router history={ hashHistory }>
        <Route component={ RootContainer }>
            <Route path="/" />
            <Route path="/articles/:articlePath" component={ ResourceDetails } />
        </Route>
    </Router>,
    document.querySelector( "#app" )
);
