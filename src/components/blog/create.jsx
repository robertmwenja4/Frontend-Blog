import React, { Component } from 'react';
import NavBar from './partials/nav';


class createBlog extends Component {
    render() {
        return ( 
            
            <div>
                <NavBar />
                <form action="/blogs" method="POST">
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" name="title" id="title" required></input>
                    <label for="snippet">Blog snippet: </label>
                    <input type="text" name="snippet" id="snippet" required></input>
                    <label for="body">Blog body: </label>
                    <textarea id="body" name="body" required></textarea>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default createBlog;