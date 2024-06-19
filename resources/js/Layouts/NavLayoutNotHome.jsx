import { Link } from "@inertiajs/react";

export default function NavLayoutNotHome(){
    return(
        <nav class=" px-5 h-10v flex flex-row justify-start space-x-8 items-center bg-gray-400">
            <a class="btn btn-sm" href="/welcomeRoot">Home</a>
            <a class="btn btn-sm" href="/filmsRoot">Películas</a>
            <a class="btn btn-sm" href="/othersRoot">Otros</a>
            <a class="btn btn-sm" href="/awardsRoot">Premios</a>
            <Link class="btn btn-neutral btn-sm" href="/usuarios">Usuarios</Link>
        </nav>
    )
}