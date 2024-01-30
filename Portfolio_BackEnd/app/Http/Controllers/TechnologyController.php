<?php

namespace App\Http\Controllers;

use App\Technology;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $technologies = Technology::all();
            return response()->json($technologies, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao listar tecnologias', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $technology = Technology::create($request->all());
            return response()->json($technology, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar tecnologia', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Technology  $technology
     * @return \Illuminate\Http\Response
     */
    public function show(Technology $technology)
    {
        try {
            return response()->json($technology, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao exibir tecnologia', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Technology  $technology
     * @return \Illuminate\Http\Response
     */
    public function edit(Technology $technology)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Technology  $technology
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Technology $technology)
    {
        try {
            $technology->update($request->all());
            return response()->json($technology, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao atualizar tecnologia', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Technology  $technology
     * @return \Illuminate\Http\Response
     */
    public function destroy(Technology $technology)
    {
        try {
            $technology->delete();
            return response()->json(['message' => 'Tecnologia excluída com sucesso'], 204);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao excluir tecnologia', 'error' => $e->getMessage()], 500);
        }
    }
}
