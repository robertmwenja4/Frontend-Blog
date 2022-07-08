import './App.css';

import React, { Component } from 'react';
import createBlog from './components/blog/create';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <createBlog />
            </React.Fragment>
        );
    }
}
export default App;