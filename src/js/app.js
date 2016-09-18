/* hepl-web/hepl-web.github.io
 *
 * ~/app.js - main entry point
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import RootContainer from "./components/root";

render(
    <Router history={ browserHistory }>
        <Route component={ RootContainer }>
            <Route path="/" />
        </Route>
    </Router>,
    document.querySelector( "#app" )
);
