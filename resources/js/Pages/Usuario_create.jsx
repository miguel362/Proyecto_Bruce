import LayoutRoot from '@/Layouts/LayoutRoot';
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function Usuario_create(){

    const handleCancel =()=>{
        router.get('/usuarios');
    }

    const form = useForm({
        name:"",
        email:"",
        password:"",
        password_confirmation:""

    })

    const handleSave =()=>{
        form.post('store');    
    }

    return (
        <LayoutRoot>
            <h1 class=" text-center text-3xl font-bold text-green-700">Nuevo Usuario</h1>
            <div class="flex flex-row items-center justify-center h-full p-8 bg-gray-500 containerReLog">
                <form class=" bg-white rounded p-8 m-8" method="POST" action="" onSubmit={(e)=>e.preventDefault()}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={form.data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => form.setData('name', e.target.value)}
                        />

                        <InputError message={form.errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={form.data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => form.setData('email', e.target.value)}
                        />

                        <InputError message={form.errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={form.data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => form.setData('password', e.target.value)}
                        />

                        <InputError message={form.errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={form.data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => form.setData('password_confirmation', e.target.value)}
                        />

                        <InputError message={form.errors.password_confirmation} className="mt-2" /> 
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <PrimaryButton onClick={() => handleSave} className="ms-4">
                            Guardar
                        </PrimaryButton>
                        <PrimaryButton onClick={handleCancel} className="ms-4">
                            Cancelar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </LayoutRoot>
    );
}