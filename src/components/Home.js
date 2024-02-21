import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Home = ({posts}) => {

    const postList = posts.length ? (
        posts.map(post => (
            <div className='post card' key={post.id}>
                <div className='card-content'>
                <Link to={`/posts/${post.id}`} onClick={() => `/${post.id}`}>
                    <span className='card-title'>{post.title}</span>
                </Link>
                    <p>{post.body}</p>
                </div>
            </div>
        ))
    ) : (
        <div className='center'>No post to show</div>
    )
    return (
        <div className='container'>
            <h4 className='center'>Home</h4>
                {postList}
        </div>
    )
}
const mapStateToProps = state => {
    return{
        posts: state.posts
    }
}

const connector = connect(mapStateToProps)

export default connector(Home) 
