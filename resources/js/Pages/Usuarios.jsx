import LayoutRoot from '@/Layouts/LayoutRoot';
import { router } from '@inertiajs/react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import {usePage} from '@inertiajs/react';

export default function Usuarios({usuarios}){

    const handleNuevoUsuario = () => {
        router.get("usuario/create");
    }

    const handleEdit = (id) => {
        router.get(`usuario/edit/${id}`);
    }

    const handleDelete = (id) => {
        Swal.fire({
            title:"Seguro que quiere eliminar al usuario con id: " + id,
            text:"Esta acción es irreversible",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!',
            cancelButtonText: 'Cancelar'
        })
        .then((rtdo)=>{
            if(rtdo.isConfirmed)
                router.delete(`usuario/${id}`);
        })
    }

    const success=usePage().props.success;

    const [sortConfig, setSortConfig] = useState({
        key: '',
        direction: 'ascending'
    })

    const sortedData = [...usuarios].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return(
        <LayoutRoot>
            {success && (<div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{success}</span>
            </div>) }
        <h1 className=" text-center text-xl text-black">Listado de usuarios</h1>
        <div className="flex flex-row items-center justify-center my-5">
        <button onClick={handleNuevoUsuario} className='btn btn-sm mx-5 bg-slate-500 glass'>
            Nuevo Usuario
        </button>
           
        </div>
       
        <div className="overflow-x-auto containerReLog">
            <table className="table table-pin-rows table-pin-cols table-md">
                <thead>
                    <tr>
                        <th> 
                            <button onClick={() => requestSort('id')}>
                                Id
                                {
                                    (sortConfig.key==='id' ? sortConfig.direction==='ascending'? ' ↓':' ↑':'↑ ↓')
                                }
                            </button>
                        </th>
                        <th>
                            <button onClick={() => requestSort('name')}>
                                Nombre
                                {
                                    (sortConfig.key==='name' ? sortConfig.direction==='ascending'?  ' ↓':' ↑':'↑ ↓')
                                }
                            </button>
                        </th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((fila)=>(
                        <tr key={fila.id}>
                            <td>{fila.id}</td>
                            <td>{fila.name}</td>
                            <td>{fila.email}</td>
                            <td>
                                <button onClick={() => handleDelete(fila.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-red-700">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleEdit(fila.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-blue-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg> 
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </LayoutRoot>
    )}