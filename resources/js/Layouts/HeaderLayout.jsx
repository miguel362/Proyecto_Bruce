import { usePage } from "@inertiajs/react";
// import {Inertia} 
import { Inertia } from "@inertiajs/inertia";

export default function HeaderLayout() {
    const user = usePage().props.auth.user;
    // const asset = (path) => {
    //     return `/images/${path}`;
    // }

    function handleLogout() {
        Inertia.post("/logout");
    }

    return (
        <header className="h-25v bg-header flex flex-row justify-between items-center p-8">
            {!user && (
                <>
                    <img className="max-h-full rounded-full border-2" src="storage/images/bruce.jpg" alt="Bruce" title="Bruce" />
                    <h1 className=" text-6xl text-white">Nuestro amigo Bruce</h1>
                    <div>
                        <a href="/login" className=" btn btn-primary m-2">Acceder</a>
                        <a href="/register" className=" btn btn-primary">Registrarme</a>
                    </div>
                </>
            )}

            {user && (
                <>
                    <img className="max-h-full rounded-full border-2" src="storage/images/portada.png" alt="Bruce" title="Bruce" />
                    <h1 className=" text-6xl text-white">Nuestro amigo Bruce</h1>
                    <div className=" h-full">
                        <h2 className=" text-white text-2xl mb-9">{user.name}</h2>
                        <button onClick={() => handleLogout()} type="submit" className="btn glass logout">Logout</button>
                    </div>
                </>

            )}

        </header>
    )
}