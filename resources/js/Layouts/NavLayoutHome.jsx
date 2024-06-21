import { usePage } from "@inertiajs/react";
import React, { useState } from 'react';

export default function NavLayoutHome() {
    const user = usePage().props.auth.user;

    const Tooltip = ({ text, text2, children }) => {
        const [isVisible, setIsVisible] = useState(false);
        return (
            <div className="tooltipContainer text-gray-950"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}>
                {children}
                <br></br>
                {isVisible && <div className="tooltip text-xs">&nbsp;&nbsp;{text}<br></br>&nbsp;&nbsp;{text2}</div>}
            </div>
        )
    }

    const HamburgerMenu = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div id="menuBurguer" className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hamburger-icon" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <nav className={`menu ${isOpen ? 'open' : ''}`}>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <a href="/">Home</a></li>
                            {user && (
                                <>
                                    <li><a href="films">Películas</a></li>
                                    <li><a href="others">Otros</a></li>
                                    <li><a href="awards">Premios</a></li>
                                </>
                            )}
                            {!user && (
                                <>
                                    <li><Tooltip text="Regístrese ó" text2="Inicie sesión">
                                        <button disabled>Películas</button>
                                    </Tooltip></li>
                                    <li>
                                        <Tooltip text="Regístrese ó" text2="Inicie sesión">
                                            <button disabled>Otros</button>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip text="Regístrese ó" text2="Inicie sesión">
                                            <button disabled>Premios</button>
                                        </Tooltip>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };

    return (
        <>
            <nav className=" px-5 h-10v flex flex-row justify-start items-center bg-gray-400 pb-3">

                <div id="menuDesktop" className="px-5 flex flex-row justify-start items-center">
                    <a className="btn btn-sm mx-1" href="/">Home</a>
                    {user && (
                        <>
                            <a className="btn btn-sm mx-1" href="films">Películas</a>
                            <a className="btn btn-sm mx-1" href="others">Otros</a>
                            <a className="btn btn-sm mx-1" href="awards">Premios</a>
                        </>
                    )}
                    {!user && (
                        <>
                            <Tooltip text="Regístrese ó" text2="Inicie sesión">
                                <button className="btn btn-sm mx-1" disabled>Películas</button>
                            </Tooltip>
                            <Tooltip text="Regístrese ó" text2="Inicie sesión">
                                <button className="btn btn-sm mx-2" disabled>Otros</button>
                            </Tooltip>
                            <Tooltip text="Regístrese ó" text2="Inicie sesión">
                                <button className="btn btn-sm mx-1" disabled>Premios</button>
                            </Tooltip>
                        </>
                    )}
                </div>

                {/* <div id="menuBurguer" className="navbar-start"> */}
                {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <a href="/">Home</a></li>
                            {user && (
                                <>
                                    <li><a href="films">Películas</a></li>
                                    <li><a href="others">Otros</a></li>
                                    <li><a href="awards">Premios</a></li>
                                </>
                            )}
                            {!user && (
                                <>
                                    <li><Tooltip text="Regístrese ó" text2="Inicie sesión">
                                        <button disabled>Películas</button>
                                    </Tooltip></li>
                                    <li>
                                        <Tooltip text="Regístrese ó" text2="Inicie sesión">
                                            <button disabled>Otros</button>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip text="Regístrese ó" text2="Inicie sesión">
                                            <button disabled>Premios</button>
                                        </Tooltip>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div> */}
                <HamburgerMenu />
                {/* </div> */}
            </nav>
        </>
    )
}