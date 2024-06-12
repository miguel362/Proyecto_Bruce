import LayoutRoot from '@/Layouts/LayoutRoot';
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import Swal from "sweetalert2";

export default function Usuario_edit({usuario}){

    const handleCancel =()=>{
        router.get('/usuarios');
    }

    const {data, setData, put, processing, errors, reset} = useForm({
        id:usuario.id || "",
        name:usuario.name || "",
        email:usuario.email || "",
    })

    const handleUpdate =(id)=>{
        Swal.fire({
            title:"Seguro que quiere realizar los cambios al usuario con id: " + id,
            text:"Esta acción es irreversible",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, modificarlo!',
            cancelButtonText: 'Cancelar'
        })
        .then((rtdo)=>{
            if(rtdo.isConfirmed)
                put(`/usuario/update/${id}`, data);
        }) 
   }
    return(
        <LayoutRoot>
            <h1 class=" text-center text-3xl font-bold text-green-700">Modificar datos Usuario</h1>
            <div class="flex flex-row items-center justify-center bg-gray-500 p-8 h-full">
                <form class=" bg-white rounded p-8 m-8" method="POST" action="" onSubmit={(e)=>e.preventDefault()}>

                    <div>
                        <InputLabel htmlFor="id" value="Id" />

                        <TextInput
                            id="id"
                            name="id"
                            value={data.id}
                            className="mt-1 block w-full"
                            isFocused={true}
                            disabled
                        />

                        {/* <InputError message={errors.id} className="mt-2" /> */}
                    </div>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        {/* onClick={handleUpdate(usuario.id)} */}
                        <PrimaryButton onClick={() => handleUpdate(usuario.id)} className="ms-4">
                            Guardar cambios
                        </PrimaryButton>
                        <PrimaryButton onClick={handleCancel} className="ms-4">
                            Cancelar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </LayoutRoot>
    )
}