import React, {Component} from 'react'
import reqHandler from '../../utils/reqHandler';
import Post from '../partials/Post';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        reqHandler.pullPosts()
            .then((incomingPosts)=>{
                console.log(incomingPosts);
                this.setState({posts : incomingPosts})
            })
    }
    render(){
        console.log('vlqzoh v cataloga');
    if (this.state.posts.length === 0) return null
    return (
        <section id="viewCatalog">
            <div class="posts">
                {this.state.posts.map(p => {
                return <Post key={p._id} postData={p}/>
                })}
            </div>
        </section>
    )
}
}

export default Catalog

