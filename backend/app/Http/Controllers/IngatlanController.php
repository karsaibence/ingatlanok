<?php

namespace App\Http\Controllers;

use App\Models\Ingatlan;
use Illuminate\Http\Request;

class IngatlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ingatlan = response()->json(Ingatlan::with('kat')->get());
        return $ingatlan;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $a = new Ingatlan();
        $a->fill($request->all());
        $a->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
