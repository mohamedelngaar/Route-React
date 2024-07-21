import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            <nav className="navbar-dark bg-dark navbar  navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">START REACT
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Link className='nav-link' to={'/'} >home</Link>
                            </li>
                            <li className="nav-item">

                                <Link className='nav-link' to={'portofolio'} >portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={'about'} >about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={'contact'} >contact</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>

    )
}
