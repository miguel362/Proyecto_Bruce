import { Link } from "@inertiajs/react";
import React, { useState } from 'react';

export default function NavLayoutNotHome() {

    const HamburgerMenu = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div id="menuBurguer" className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <a href="/welcomeRoot">Home</a></li>
                        <li><a href="/filmsRoot">Películas</a></li>
                        <li><a href="/othersRoot">Otros</a></li>
                        <li><a href="/awardsRoot">Premios</a></li>
                        <li><a href="/usuarios">Usuarios</a></li>
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <nav class=" px-5 h-10v flex flex-row justify-start items-center bg-gray-400">
            <div id="menuDesktop" className="px-5 flex flex-row justify-start items-center">
            <a class="btn btn-sm mx-1" href="/welcomeRoot">Home</a>
            <a class="btn btn-sm mx-1" href="/filmsRoot">Películas</a>
            <a class="btn btn-sm mx-1" href="/othersRoot">Otros</a>
            <a class="btn btn-sm mx-1" href="/awardsRoot">Premios</a>
            <Link class="btn btn-neutral btn-sm mx-1" href="/usuarios">Usuarios</Link>
            </div>

            {/* <div id="menuBurguer" className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <a href="/welcomeRoot">Home</a></li>
                        <li><a href="/filmsRoot">Películas</a></li>
                        <li><a href="/othersRoot">Otros</a></li>
                        <li><a href="/awardsRoot">Premios</a></li>
                        <li><a href="/usuarios">Usuarios</a></li>
                    </ul>
                </div>
            </div> */}
            <HamburgerMenu/>
        </nav>
    )
}