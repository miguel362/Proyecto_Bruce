import LayoutHome from '@/Layouts/LayoutHome';
import React, { useState } from 'react';
import ScreenProd from '@/Components/ScreenProd';
import ScreenGuio from '@/Components/ScreenGuio';


export default function Others() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <>
            <LayoutHome>
                <main className=" bg-main h-auto py-10 px-4">
                    <h1 className=" text-center text-xl text-black my-5">Películas Como productor</h1>

                    {loading && <p>Cargando...</p>}
                    {error && <p>{error}</p>}


                    <ScreenProd/>

                    <h1 className=" text-center text-xl text-black my-5">Película Como guionista</h1>
                    <ScreenGuio/>
                </main>
            </LayoutHome>
        </>
    );
}