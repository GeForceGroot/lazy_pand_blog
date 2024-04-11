/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
    return (
        <>
            <section style={{height:''}}>
                <div className='container' style={{position:'sticky', bottom:'0px'}}>
                    <footer className="d-flex flex-wrap justify-content-between align-items-center border-top" sty>
                        <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>

                        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img src='https://w7.pngwing.com/pngs/333/317/png-transparent-panda-cool-panda-with-eyeglasses.png' className="bi me-2" width="40" height="40" />
                        </a>

                        <ul className="nav col-md-4 justify-content-end">
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary" style={{ color: 'black' }}>Home</a></li>
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary" style={{ color: 'black' }}>Features</a></li>
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary" style={{ color: 'black' }}>About</a></li>
                        </ul>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer
