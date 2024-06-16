import React, { useState } from 'react';
import { format } from 'date-fns';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const TablaPeliculas = ({ peliculas }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = peliculas.slice(indexOfFirstMovie, indexOfLastMovie);

  const [sortConfig, setSortConfig] = useState({
    key: '',
    direction: 'ascending'
  })

  const sortedData = [...currentMovies].sort((a, b) => {
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

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(peliculas.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map(number => (
      <button key={number} onClick={() => handlePageChange(number)}>
        {number}
      </button>
    ));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
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
                // style={{ width: '200px', height: '300px' }}
              />{movie.title}</td>
              <td>{movie.release_date ? format(new Date(movie.release_date), 'yyyy') : 'Fecha no disponible'}</td>
              <td>{movie.overview ? movie.overview : 'Resumen no disponible'}<br></br><button className='btn border-t-neutral-50 p-1 bg-green-300 my-3' onClick={() => goToFilm(movie.id)}>Más info</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=' flex flex-wrap w-1/2 my-0 mx-auto content-between justify-between pagination'>
        {renderPageNumbers()}
      </div>
    </>
  );
};

export default TablaPeliculas;