import { Link } from "@inertiajs/react";

export default function NavLayoutNotHome(){
    return(
        <nav class=" px-5 h-10v flex flex-row justify-start space-x-8 items-center bg-gray-400">
            <a class="btn btn-primary btn-sm" href="/welcomeRoot">Home</a>
            <a class="btn btn-primary btn-sm" href="/filmsRoot">Films</a>
            <a class="btn btn-primary btn-sm" href="/othersRoot">Others</a>
            <a class="btn btn-primary btn-sm" href="/awardsRoot">Awards</a>
            <Link class="btn btn-primary btn-sm" href="/usuarios">Users</Link>
        </nav>
    )
}