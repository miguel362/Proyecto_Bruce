import { usePage } from "@inertiajs/react"

export default function NavLayoutHome(){
    const user=usePage().props.auth.user;
    return(
        <>
            <nav className=" px-5 h-10v flex flex-row justify-start space-x-8 items-center bg-gray-400">
            <a className="btn btn-primary btn-sm" href="/">Home</a>
            {user && (
                <>
                <a className="btn btn-primary btn-sm" href="films">Films</a>
                <a className="btn btn-primary btn-sm" href="others">Others</a>
                <a className="btn btn-primary btn-sm" href="awards">Awards</a>
                </>
            )}
            {!user && (
               <>
                <a className="btn btn-primary btn-sm" disabled  href="">Films</a>
                <a className="btn btn-primary btn-sm" disabled href="">Others</a>
                <a className="btn btn-primary btn-sm" disabled href="">Awards</a>
                <h2 className=" text-center text-lg font-bold text-green-700">Para acceder a Films, others y awards regístrese o inicie sesión.</h2>
                </>
            )}
            </nav>
           

        </>
    )
}