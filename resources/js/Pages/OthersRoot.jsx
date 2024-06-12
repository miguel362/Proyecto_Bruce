import LayoutRoot from '@/Layouts/LayoutRoot';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const TMDB_API_KEY = '5a49158a9e37dd2fa067edfc150602d3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w400';
const PRODUCER_NAME = 'bruce-willis';

export default function OthersRoot() {

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
            <LayoutRoot>
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
                </main>
            </LayoutRoot>
        </>
    );
}
