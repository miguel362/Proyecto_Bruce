import LayoutHome from '@/Layouts/LayoutHome';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const TMDB_API_KEY = '5a49158a9e37dd2fa067edfc150602d3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w400';
const PRODUCER_NAME = 'bruce-willis';

export default function Others() {

    //produccion
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //guion
    const [moviesG, setMoviesG] = useState([]);
    const [loadingG, setLoadingG] = useState(false);
    const [errorG, setErrorG] = useState(null);

    useEffect(() => {
        const handleSearch = async () => {
            setLoading(true);
            setError(null);

            try {
                // Paso 1: Buscar el ID del productor
                const searchResponse = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&query=${PRODUCER_NAME}&language=es`);
                const searchData = await searchResponse.json();

                if (searchData.results.length === 0) {                  
                    setError('Productor no encontrado');
                    setLoading(false);
                    return;
                }

                const producerId = searchData.results[0].id;

                // Paso 2: Obtener las películas producidas por el productor
                const creditsResponse = await fetch(`https://api.themoviedb.org/3/person/${producerId}/movie_credits?api_key=${TMDB_API_KEY}&language=es`);
                const creditsData = await creditsResponse.json();

                // Filtrar solo las películas donde el productor es conocido por haber producido
                const producedMovies = creditsData.crew.filter((credit) => credit.job === 'Producer');

                setMovies(producedMovies);
            } catch (error) {
                setError('Error al buscar películas');
            }

            setLoading(false);
        }; handleSearch();
        const handleSearchGionist = async () => {
            setLoadingG(true);
            setErrorG(null);

            try {
                // Paso 1: Buscar el ID del productor
                const searchResponse = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&query=${PRODUCER_NAME}&language=es`);
                const searchData = await searchResponse.json();

                if (searchData.results.length === 0) {                  
                    setErrorG('Productor no encontrado');
                    setLoadingG(false);
                    return;
                }

                const producerId = searchData.results[0].id;

                // Paso 2: Obtener las películas producidas por el productor
                const creditsResponse = await fetch(`https://api.themoviedb.org/3/person/${producerId}/movie_credits?api_key=${TMDB_API_KEY}&language=es`);
                const creditsData = await creditsResponse.json();

                // Filtrar solo las películas donde el guionista es conocido por haber escrito
                const writtenMovies = creditsData.crew.filter((credit) => credit.job === 'Screenplay' || credit.job === 'Writer');

                setMoviesG(writtenMovies);
            } catch (error) {
                setErrorG('Error al buscar películas');
            }

            setLoadingG(false);
        }; handleSearchGionist();
    }, []);

    return (
        <>
            <LayoutHome>
                <main className=" bg-main h-auto py-10 px-4">
                    <h1 className=" text-center text-xl text-black">Películas Como productor</h1>

                    {loading && <p>Cargando...</p>}
                    {error && <p>{error}</p>}

                    <table className="table table-pin-rows table-pin-cols table-md border-8 mb-5">
                        <thead>
                            <tr>
                                <th>
                                    Poster
                                </th>
                                <th>Título</th>
                                <th>Año</th>
                                <th>Resumen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie) => (
                                <tr key={movie.id}>
                                    <td><img
                                        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                                        alt={movie.title}
                                        style={{ width: '200px', height: '300px' }}
                                    /></td>
                                    <td>{movie.title}</td>
                                    <td>{movie.release_date ? format(new Date(movie.release_date), 'yyyy') : 'Fecha no disponible'}</td>
                                    <td>{movie.overview}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h1 className=" text-center text-xl text-black">Película Como guionista</h1>

                    {loadingG && <p>Cargando...</p>}
                    {errorG && <p>{errorG}</p>}

                    <table className="table table-pin-rows table-pin-cols table-md border-8">
                        <thead>
                            <tr>
                                <th>
                                    Poster
                                </th>
                                <th>Título</th>
                                <th>Año</th>
                                <th>Resumen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moviesG.map((movieG) => (
                                <tr key={movieG.id}>
                                    <td><img
                                        src={`${IMAGE_BASE_URL}${movieG.poster_path}`}
                                        alt={movieG.title}
                                        style={{ width: '200px', height: '300px' }}
                                    /></td>
                                    <td>{movieG.title}</td>
                                    <td>{movieG.release_date ? format(new Date(movieG.release_date), 'yyyy') : 'Fecha no disponible'}</td>
                                    <td>{movieG.overview}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <h3 className="one">Producción</h3>

                <table className="card credits" border="0" cellspacing="0" cellpadding="0" data-role="tooltip">
                    <tbody><tr>
                    <td>
                        <table className="credit_group">
                        <tbody><tr>
                            <td className="year">2005</td>
                            <td className="seperator"><span data-url="/movie/2026-hostage" data-id="4bc8981a017a3c122d019c7a" data-type="movie" data-slug="2026" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                            <td className="role true account_adult_false item_adult_false">
                            <a className="tooltip" href="/movie/2026-hostage?language=es-ES"><bdi>Hostage</bdi></a>
                                <span className="group">  … <span className="role">Productor/a</span></span>
                            </td>
                        </tr>
                        </tbody></table>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <table className="credit_group">
                        <tbody><tr>
                            <td className="year">2004</td>
                            <td className="seperator"><span data-url="/tv/62864-touching-evil" data-id="556e14ce925141707c000199" data-type="tv" data-slug="62864" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                            <td className="role true account_adult_false item_adult_false">
                            <a className="tooltip" href="/tv/62864-touching-evil?language=es-ES"><bdi>Rozando el mal</bdi></a>
                                <span className="group"> <span>(<a className="tv" href="/tv/62864-touching-evil/episodes?credit_id=556e2726925141421d0013b0&amp;person_id=4bc88ac6017a3c122d000382&amp;language=es-ES">13 episodios</a>)</span>  … <span className="role">Productor/a ejecutivo/a</span></span>
                            </td>
                        </tr>
                        </tbody></table>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <table className="credit_group">
                        <tbody><tr>
                            <td className="year">2002</td>
                            <td className="seperator"><span data-url="/movie/17043-the-crocodile-hunter-collision-course" data-id="4bc8bd43017a3c122d072fa6" data-type="movie" data-slug="17043" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                            <td className="role true account_adult_false item_adult_false">
                            <a className="tooltip" href="/movie/17043-the-crocodile-hunter-collision-course?language=es-ES"><bdi>El cazacocodrilos: Misión salvaje</bdi></a>
                                <span className="group">  … <span className="role">Productor/a ejecutivo/a</span></span>
                            </td>
                        </tr>
                        <tr>
                            <td className="year">2002</td>
                            <td className="seperator"><span data-url="/movie/135051-true-west" data-id="50660a6519c2952ecd0009dc" data-type="movie" data-slug="135051" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                            <td className="role true account_adult_false item_adult_false">
                            <a className="tooltip" href="/movie/135051-true-west?language=es-ES"><bdi>True West</bdi></a>
                                <span className="group">  … <span className="role">Productor/a ejecutivo/a</span></span>
                            </td>
                        </tr>
                        </tbody></table>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <table className="credit_group">
                        <tbody><tr>
                            <td className="year">1996</td>
                            <td className="seperator"><span data-url="/tv/13297-bruno-the-kid" data-id="525826ea760ee36aaa81af46" data-type="tv" data-slug="13297" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                            <td className="role true account_adult_false item_adult_false">
                            <a className="tooltip" href="/tv/13297-bruno-the-kid?language=es-ES"><bdi>Bruno the Kid</bdi></a>
                                <span className="group"> <span>(<a className="tv" href="/tv/13297-bruno-the-kid/episodes?credit_id=525826eb760ee36aaa81b23b&amp;person_id=4bc88ac6017a3c122d000382&amp;language=es-ES">36 episodios</a>)</span>  … <span className="role">Productor/a</span></span>
                            </td>
                        </tr>
                        </tbody></table>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <table className="credit_group">
                        <tbody><tr>
                            <td className="year">1987</td>
                            <td className="seperator"><span data-url="/movie/132542-the-return-of-bruno" data-id="5054543c19c29572620001c8" data-type="movie" data-slug="132542" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                            <td className="role true account_adult_false item_adult_false">
                            <a className="tooltip" href="/movie/132542-the-return-of-bruno?language=es-ES"><bdi>The Return of Bruno</bdi></a>
                                <span className="group">  … <span className="role">Productor/a</span></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                    </tr>
                </tbody></table>

                    <h3 className="two">Guion</h3>

                    <table className="card credits" border="0" cellspacing="0" cellpadding="0" data-role="tooltip">
                        <tbody><tr>
                        <td>
                            <table className="credit_group">
                            <tbody><tr>
                                <td className="year">1991</td>
                                <td className="seperator"><span data-url="/movie/9292-hudson-hawk" data-id="4bc8a7d6017a3c122d043f0c" data-type="movie" data-slug="9292" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                                <td className="role true account_adult_false item_adult_false">
                                <a className="tooltip" href="/movie/9292-hudson-hawk?language=es-ES"><bdi>El gran halcón</bdi></a>
                                    <span className="group">  … <span className="role">Historia</span></span>
                                </td>
                            </tr>
                            </tbody></table>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <table className="credit_group">
                            <tbody><tr>
                                <td className="year">1987</td>
                                <td className="seperator"><span data-url="/movie/132542-the-return-of-bruno" data-id="5054543c19c29572620001c8" data-type="movie" data-slug="132542" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                                <td className="role true account_adult_false item_adult_false">
                                <a className="tooltip" href="/movie/132542-the-return-of-bruno?language=es-ES"><bdi>The Return of Bruno</bdi></a>
                                    <span className="group">  … <span className="role">Guionista</span></span>
                                </td>
                            </tr>
                            </tbody></table>
                        </td>
                        </tr>
                    </tbody></table>

                    <h3 className="three">Sonido</h3>

                    <table className="card credits" border="0" cellspacing="0" cellpadding="0" data-role="tooltip">
                        <tbody><tr>
                        <td>
                            <table className="credit_group">
                            <tbody><tr>
                                <td className="year">1987</td>
                                <td className="seperator"><span data-url="/movie/132542-the-return-of-bruno" data-id="5054543c19c29572620001c8" data-type="movie" data-slug="132542" className="glyphicons_v2 circle-empty account_adult_false item_adult_false"></span></td>
                                <td className="role true account_adult_false item_adult_false">
                                <a className="tooltip" href="/movie/132542-the-return-of-bruno?language=es-ES"><bdi>The Return of Bruno</bdi></a>
                                    <span className="group">  … <span className="role">Música</span></span>
                                </td>
                            </tr>
                            </tbody></table>
                        </td>
                        </tr>
                    </tbody></table> */}
                </main>
            </LayoutHome>
        </>
    );
}
