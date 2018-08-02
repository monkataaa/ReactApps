import React from 'react'
import { Link } from 'react-router-dom'
import dateTimeConverter from './../../utils/dateTimeConverter'

const Post = ({ postData }) => {
    return (
        <article class="post">
            <div class="col rank">
                <span>1</span>
            </div>
            <div class="col thumbnail">
            <a href={postData.url}>
                    <img src={postData.imageUrl} />
                </a>
            </div>
            <div class="post-content">
                <div class="title">
                <a href={postData.url}>
                    {postData.title}
                </a>
                </div>
                <div class="details">
                    <div class="info">
                        submitted {dateTimeConverter(postData._kmd.lmt)} day ago by {postData.author}
                </div>
                    <div class="controls">
                        <ul>
                            <li class="action"><Link class="commentsLink" to={`/details/${postData._id}`}>comments</Link></li>
                            <li class="action"><a class="editLink" href="#">edit</a></li>
                            <li class="action"><a class="deleteLink" href="#">delete</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </article>
    )

}

export default Post