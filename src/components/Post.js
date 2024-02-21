import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost } from '../actions/deletePost'



const Post = ({ posts, deletePost }) => {
    const { post_id } = useParams()

    const post = posts.find(post => post.id === post_id)


    const individualPost = post ? (
        <div className='post'>
            <h4 className='center'>{post.title}</h4>
            <p>{post.body}</p>
            <button className='btn grey' onClick={() => deletePost(post.id)}>Delete</button>
        </div>
    ) : (
        <div className='center'>Loading post</div>
    )

    return (
        <div className='container'>
            {individualPost}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => { dispatch ({type: 'DELETE_POST', id : id})}
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(Post)
