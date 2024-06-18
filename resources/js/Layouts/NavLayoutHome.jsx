import { usePage } from "@inertiajs/react";
import React, {useState} from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function NavLayoutHome() {
    const user = usePage().props.auth.user;

    const Tooltip =({text, children}) => {
        const [isVisible, setIsVisible] = useState(false);
        return(
            <div className="tooltipContainer text-gray-950"
            onMouseEnter={()=> setIsVisible(true)}
            onMouseLeave={()=> setIsVisible(false)}>
                {children}
                <br></br>
                {isVisible && <div className="tooltip text-xs">{text}</div>}
            </div>
        )
    }
    return (
        <>
            <nav className=" px-5 h-10v flex flex-row justify-start space-x-8 items-center bg-gray-400 pb-3">
                <a className="btn btn-primary btn-sm" href="/">Home</a>
                {user && (
                    <>
                        <a className="btn btn-primary btn-sm" href="films">Películas</a>
                        <a className="btn btn-primary btn-sm" href="others">Otros</a>
                        <a className="btn btn-primary btn-sm" href="awards">Premios</a>
                    </>
                )}
                {!user && (
                    <>
                        <Tooltip text="Registro/inicio sesión">
                            <button className="btn btn-primary btn-sm" disabled>Películas</button>
                        </Tooltip>
                        <Tooltip text="Registro/inicio sesión">
                            <button className="btn btn-primary btn-sm" disabled>Otros</button>
                        </Tooltip>
                        <Tooltip text="Registro/inicio sesión">
                            <button className="btn btn-primary btn-sm" disabled>Premios</button>
                        </Tooltip>
                    </>
                )}
            </nav>
        </>
    )
}