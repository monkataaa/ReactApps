import React, { Component } from 'react'
import reqHandler from './../../utils/reqHandler'
import DataCollector from './../../utils/DataCollector'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author : localStorage.getItem('author')
        };

        this.dataCollector = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }
        this.submitData = (e) => {
            e.preventDefault()
            reqHandler.createPost(this.state)
                .then((newPost) => {
                    this.props.history.push('/')
                }).catch(err => console.log(err))
        }
    }
    render() {
        return (
            <div class="submitArea formContainer" onSubmit={this.submitData}>
                <form id="editPostForm" class="submitForm">
                    <label>Link URL:</label>
                    <input onChange={this.dataCollector} name="url" type="text" />
                    <label>Link Title:</label>
                    <input onChange={this.dataCollector} name="title" type="text" />
                    <label>Link Thumbnail Image (optional):</label>
                    <input onChange={this.dataCollector} name="imageUrl" type="text" />
                    <label>Comment (optional):</label>
                    <textarea onChange={this.dataCollector} name="description"></textarea>
                    <input id="btnEditPost" type="submit" value="Edit Post" /> 
                </form>
            </div>
        )
    }
}
export default Submit

