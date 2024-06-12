import LayoutHome from '@/Layouts/LayoutHome';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const TMDB_API_KEY = '5a49158a9e37dd2fa067edfc150602d3';
const actorName = 'bruce-willis';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Films() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);
      setError(null);

      try {
        // Paso 1: Buscar el ID del actor
        const searchResponse = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&query=${actorName}&language=es`);
        const searchData = await searchResponse.json();

        if (searchData.results.length === 0) {
          setError('Actor no encontrado');
          setLoading(false);
          return;
        }

        const actorId = searchData.results[0].id;

        // Paso 2: Obtener la filmografía del actor
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${TMDB_API_KEY}&language=es`);
        const creditsData = await creditsResponse.json();

        setMovies(creditsData.cast);
      } catch (error) {
        setError('Error al buscar las películas');
      }

      setLoading(false);
    };
    handleSearch();
  }, []);

  return (
    <LayoutHome>
      <main className=" bg-main h-auto py-10 px-4">
        <h1 className=" text-center text-xl text-black">Listado de películas</h1>

        {/* <button onClick={handleSearch}>Buscar peliculas de bruce</button> */}

        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}

        {/* <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul> */}
        <table className="table table-pin-rows table-pin-cols table-md border-8">
          <thead>
            <tr>
              {/* <th>  */}
              {/* className={getClassNamesFor('id')} */}
              {/* <button onClick={() => requestSort('id')}>
                                Id
                                {
                                    (sortConfig.key==='id' || sortConfig.key==='') &&(
                                    sortConfig.direction==='ascending'? ' ▲': ' ▼')
                                }
                            </button>
                        </th> */}
              <th>
                {/* <button onClick={() => requestSort('name')}> */}
                Poster
                {/* {
                                    //{sortConfig.key===campo &&(   orden.ascendente? ' ▲': ' ▼')}
                                    (sortConfig.key==='name' || sortConfig.key==='') &&(
                                    sortConfig.direction==='ascending'? ' ▲': ' ▼')
                                    // (sortConfig.key==='id' || sortConfig.key===''? ' ▲':' ▲')
                                 } */}
                {/* { */}
                {/* (sortConfig.key==='id' || sortConfig.key===''? ' ▲':' ▲')
                                 } */}
                {/* </button> */}
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
      </main>
    </LayoutHome>
  );
}