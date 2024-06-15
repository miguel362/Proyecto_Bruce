import LayoutHome from '@/Layouts/LayoutHome';
import React, { useState } from 'react';
import Screen from '@/Components/Screen';

export default function Films() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <LayoutHome>
      <main className=" bg-main h-auto py-10 px-4">
        <h1 className=" text-center text-xl text-black my-5">Listado de películas</h1>

        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}

        <Screen />
      </main>
    </LayoutHome>
  );
}