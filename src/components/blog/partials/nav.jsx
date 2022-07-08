import React, { Component } from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <div class="site-title">
                    <a href="/">
                        <h1>Blog Ninjas</h1>
                    </a>
                    <p>A net ninja site</p>
                </div>
                <ul>
                    <li><a href="/">Blogs</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blogs/create">New Blog</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;