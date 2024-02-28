<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $images = Image::all();
            return response()->json($images, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao listar imagens', 'error' => $e->getMessage()], 500);
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
            $images = $request->all();
            $createdImages = [];
            foreach ($images as $imageData) {
                $image = Image::create($imageData);
                array_push($createdImages, $image);
            }
            return response()->json($createdImages, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar imagem', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        try {
            return response()->json($image, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao exibir imagem', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        try {
            $image->update($request->all());
            return response()->json($image, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao atualizar imagem', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        try {
            $image->delete();
            return response()->json(['message' => 'Imagem deletada com sucesso'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao deletar imagem', 'error' => $e->getMessage()], 500);
        }
    }
}
