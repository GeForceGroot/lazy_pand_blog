/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';


const PostsData = () => {

    const [blogPosts, setBlogPosts] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const url = `https://backend-app-lazy-f94aefb55340.herokuapp.com/`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setBlogPosts(data) })
    }, [])
    return (
        <>
            <div className='container'>
                <h2 style={{ fontStyle: "oblique" }}>Latest Posts</h2>
                {/* Post-Card */}
                {blogPosts && blogPosts.length > 0 ? (
                    blogPosts.map((post, index) => (
                        <div key={index} className="card my-5" style={{ border: "1px solid black" }}>
                            <span className="card-header" style={{
                                fontWeight: "bold", fontSize: "20px", color: "whitesmoke", fontStyle: "oblique", background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
                                backgroundBlendMode: "multiply"
                            }}>
                                <img src="https://img.kwcdn.com/product/open/2023-08-01/1690869413280-ec94707050fc4bdb8e53461ff002e919-goods.jpeg?imageView2/2/w/500/q/60/format/webp" alt="Panda Image" width="40" height="40" style={{ marginRight: "10px", border: "3px solid black", borderRadius: "25px" }} />
                                {post.createdAt.substring(0, 10)}  /  {post.createdAt.substring(11, 16)}
                            </span>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.postData.substring(0, 200)}.......</p>
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#565151", borderColor: "black" }}>Read More...</a>
                            </div>
                        </div>
                    ))

                ) : (<div className="alert alert-warning" role="alert">
                    No posts available.
                </div>)}
                {/* Create-Post Button */}
                <a href='./createPost'  style={{ position: "fixed", left: '0', bottom: '0', marginLeft: "60px", marginBottom: '33px'}} onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}>
                    {isHovered ? (
                        <FontAwesomeIcon icon={faPlusSquare} style={{ fontSize: '75px', color:'black' }} beatFade />
                    ) : (
                        <FontAwesomeIcon icon={faPlusSquare} style={{ fontSize: '75px', color:'black' }} />
                    )}
                </a>
            </div >
        </>
    )
}

export default PostsData
