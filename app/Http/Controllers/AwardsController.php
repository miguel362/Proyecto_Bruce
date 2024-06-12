<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AwardsController extends Controller
{
    public function __invoke()
    {   
        return Inertia::render('Awards');
    }
}
