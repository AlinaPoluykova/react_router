import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Nested links</h1>pwd
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

