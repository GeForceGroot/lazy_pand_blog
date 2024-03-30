/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4  border-top" style={{ backgroundColor: 'whitesmoke', position: 'sticky', zIndex: '2' }}>
                <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src='https://w7.pngwing.com/pngs/333/317/png-transparent-panda-cool-panda-with-eyeglasses.png' className="bi me-2" width="55" height="55" />
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary" style={{ color: 'black' }}>Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" style={{ color: 'black' }}>Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" style={{ color: 'black' }}>About</a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer
