import React, { useState } from 'react';
import { format } from 'date-fns';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const TablaPeliculas = ({ peliculas }) => {

    const [sortConfig, setSortConfig] = useState({
      key: '',
      direction: 'ascending'
    })
  
    const sortedData = [...peliculas].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  
    const goToFilm = (id) => {
  
      window.open('https://www.themoviedb.org/movie/' + id, '_blank');
    }
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };


    return (
       
        <table className="table table-pin-rows table-pin-cols table-md border-8">
          <thead>
            <tr>
              <th>
                <button onClick={() => requestSort('title')}>
                  Poster
                  {
                    (sortConfig.key === 'title' ? sortConfig.direction === 'ascending' ? ' ↓' : ' ↑' : '↑ ↓')
                  }
                </button>
              </th>
              <th>
                <button onClick={() => requestSort('release_date')}>
                  Año
                  {
                    (sortConfig.key === 'release_date' ? sortConfig.direction === 'ascending' ? ' ↓' : ' ↑' : '↑ ↓')
                  }
                </button></th>
              <th>Resumen</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((movie) => (
              <tr key={movie.id}>
                <td><img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '200px', height: '300px' }}
                />{movie.title}</td>
                <td>{movie.release_date ? format(new Date(movie.release_date), 'yyyy') : 'Fecha no disponible'}</td>
                <td>{movie.overview ? movie.overview : 'Resumen no disponible'}<br></br><button className='btn border-t-neutral-50 p-1 bg-green-300 my-3' onClick={() => goToFilm(movie.id)}>Más info</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      
      // <table>
      //   <thead>
      //     <tr>
      //       <th>Título busqueda</th>
      //       <th>Descripción busqueda</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {peliculas.map((peli, index) => (
      //       <tr key={index}>
      //         <td>{peli.title}</td>
      //         <td>{peli.overview}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
    );
  };

  export default TablaPeliculas;