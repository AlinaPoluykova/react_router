import React from 'react'
import {render} from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render(
    (
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/repos" component={Repos}/>
                {/* add the new route */}
                <Route path="/repos/:userName/:repoName" component={Repo}/>
                <Route path="/about" component={About}/>
            </Route>
        </Router>

    ), document.getElementById('app')
)