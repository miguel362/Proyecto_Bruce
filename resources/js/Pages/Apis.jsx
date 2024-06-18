import LayoutHome from '@/Layouts/LayoutHome';
import Films from './Films';

export default function Apis() {

    // const getPelis = () => {
    //     const url_base = `http://localhost:8000/getFilms`;
    //     axios.get(url_base)
    //         .then((response) => {
    //             setVisible(false)
    //             setFields(["title", "url"]);
    //             setRows(response.data.results.map((data) => ({
    //                 title: data.title,
    //                 url: `https://themoviedb.org/movie/${data.id}`
    //             })))
    //             // setCrud(false)
    //             // setName(datos.nombre)
    //         })
    //         .catch = ((error) => {
    //             console.error("Error en getFilms")
    //             console.error(error)
    //         })
    // }

    return (
        <LayoutHome>
            <main className=" bg-main h-auto py-10 px-4">
                <div className='flex justify-center items-center h-full'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='card w-96 bg-base-100 shadow-xl image-full'>
                            {/* <figure className='filter brightness-200'>
                                <img src="images/GIT_Repository.jpg"/>
                            </figure> */}
                            <div className=' card-body'>
                                <h2 className='mt-7 card-title'>Pelis</h2>
                                <p>pelis de bruce</p>
                                <div className=' card-actions justify-end'>
                                    {/* <button onClick={getPelis} className='btn btn-primary'>Obtener datos</button> */}
                                    <a className='btn btn-primary' href="/getFilms">Obtener datos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Films/>
            </main>
        </LayoutHome>
    )
}