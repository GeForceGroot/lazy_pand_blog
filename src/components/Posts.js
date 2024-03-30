/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import Chat from './Chat'
import PostsData from './PostsData'

const Posts = () => {
    return (
        <>
            <div className='row' style={{marginLeft:'0px', marginRight:'0px'}}>
                <div className="col-sm-9  p-3 border" style={{border: "2px solid gray", borderRadius: "10px"}}><PostsData/></div>
                <div className="col-3 bg-light p-3 border" style={{border: "2px solid gray", borderRadius: "10px", height:'900px', position:"fixed", right:'0'}}>
                    <h1 style={{textAlign:'center'}}>Chat Here !</h1>
                    <div className='container'>
                    <iframe id='iframe_1' src="https://chat-app-lazy-panda-80c20b81207d.herokuapp.com/" frameBorder="1" style={{width:'450px', height:'760px'}}></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts
