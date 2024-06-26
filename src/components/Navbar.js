/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'



const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-light' style={{ backgroundColor: 'whitesmoke', justifyContent: "center", fontWeight: "bold", position: "sticky", top: "0", zIndex: '1', opacity: '.9', visibility: 'visible' }}>
                <a className='navbar-brand' href='/'>
                    <img src="https://w7.pngwing.com/pngs/333/317/png-transparent-panda-cool-panda-with-eyeglasses.png" width="40" height="40" className="d-inline-block align-top" alt="" />
                    <span style={{ display: "inline-flex", fontSize: "25px" }}>&lt;Lazy-Panda/&gt;</span>
                </a>
            </nav>
        </>
    )
}

export default Navbar
