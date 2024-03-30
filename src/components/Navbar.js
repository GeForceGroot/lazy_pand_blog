/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-light' style={{backgroundColor: 'whitesmoke', justifyContent:"center", fontWeight:"bold", position:"sticky", top:"0", zIndex:'1', opacity:'.9', visibility:'visible'}}>
                <a className='navbar-brand' to={'#'}>
                    <img src="https://w7.pngwing.com/pngs/333/317/png-transparent-panda-cool-panda-with-eyeglasses.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    <span style={{marginTop:"5px", display:"inline-flex", fontSize:"30px"}}>&lt;Lazy-Panda/&gt;</span>
                </a>
            </nav>
        </>
    )
}

export default Navbar
