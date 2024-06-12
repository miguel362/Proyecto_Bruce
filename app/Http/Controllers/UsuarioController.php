<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsuarioController extends Controller
{
   //devolver todos los usuarios
   public function index(){
        $usuarios= User::all();
        return Inertia::render('Usuarios', ['usuarios'=>$usuarios]);
        // return view('usuarios', ['usuarios'=>$usuarios]);
    }

    //nuevo usuario
    public function create(){
        // return view('usuario_create');
        return Inertia::render('Usuario_create');
    }

    //guardar un usuario nuevo
    public function store(Request $request){
        //cogemos los datos del usuario
        $datos=$request->input();
        //dd($datos);

        //creamos y guardamos al usuario con los datos obtenidos
        $usuario=new User($datos);
        $usuario->save();

        //mensaje de confirmación
        session()->flash("success", "se ha dado de alta al usuario $usuario->name ");

        //volvemos a sacar a todos los usuarios
        //$usuarios= User::all();
        //return Inertia::render('Usuarios', ['usuarios'=>$usuarios]);
        return redirect(route('usuarios'));
    }

    //eliminar usuario
    public function delete(int $id){
        //dd($id);
        //busco al usuario con ese id que se pasa por parámetro
        $usuario=User::find($id);
        
        //se borra al usuario 
        $usuario->delete();

        //mensaje de confirmación
        session()->flash("success", "se ha eliminado al usuario $usuario->name");

        //volvemos a sacar a todos los usuarios
        //$usuarios= User::all();
        // return view('usuarios', ['usuarios'=>$usuarios]);
        return redirect(route('usuarios'));
    }

    //editar usuario
    public function edit(int $id){
        $usuario=User::find($id);

        // $datos=$usuario->input();
        //dd($usuarioId);

        //creamos y guardamos al usuario con los datos obtenidos
        //$usuario=new User($usuarioId);

        //devolvemos un form con el usuario
        //return view('usuario_edit', ['usuario'=>$usuario]); 
        return Inertia::render('Usuario_edit', ['usuario'=>$usuario]);
    }

    //modificar usuario
    public function update(Request $request, int $id){//, User $user
        $usuario=User::find($id);
        //dd($usuario);

        $usuario->name = $request->input('name');
        $usuario->email = $request->input('email');
        $usuario->save();

        //mensaje de confirmación
        session()->flash("success", "se ha modificado al usuario con id: $usuario->id");

        // $datos=$request->input();
        // $user->update($datos);

        //volvemos a sacar a todos los usuarios
        //$usuarios= User::all();
        // return view('usuarios', ['usuarios'=>$usuarios]); 
        return redirect(route('usuarios'));
    // return view('usuario_create');
    }
}
