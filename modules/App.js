import React from 'react'
//import { Link } from 'react-router'
import NavLink from './NavLink'

export default class App extends React.Component{
    render() {
        return (
            <div>
                <h1>Nested links</h1>
                <ul role="nav">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}



