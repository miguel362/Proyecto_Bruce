<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Apis');
    }

    public function get_films(Request $request)
    {
        info("Apicontroller en get films");

        $client= new Client();

        $api_key="5a49158a9e37dd2fa067edfc150602d3";

        $url="https://api.themoviedb.org/3/trending/all/day?language=es-ES&api_key=$api_key";

        //$response = Http::get($url);
        $response = $client->get('https://api.themoviedb.org/3/movie/popular', [
            'query' => [
                'api_key' => $api_key,
                'language' => 'es-ES',
                'page' => 1
            ]
        ]);
        info($response);
        $datos=json_decode($response->getBody(), true);
        //$datos=response()->json(json_decode($response->getBody(), true));
        info($datos);
        return response()->json($datos);
        // return Inertia::render('Apis');
    }
}
