<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $projects = Project::with('technologies')->get();

            if ($projects->isEmpty()) {
                return response()->json(['message' => 'Nenhum projeto encontrado'], 404);
            } else {
                $formattedProjects = $projects->map(function ($project) {
                    $technologies = $project->technologies->map(function ($technology) {
                        return [
                            'id' => $technology->id,
                            'name' => $technology->name
                        ];
                    });

                    return [
                        'id' => $project->id,
                        'name' => $project->name,
                        'description' => $project->description,
                        'link' => $project->link,
                        'thumbnail' => $project->thumbnail,
                        'technologies' => $technologies
                    ];
                });
            }
            return response()->json($formattedProjects, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao listar projetos', 'error' => $e->getMessage()], 500);
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
            foreach ($request->all() as $req) {
                $project = new Project();
                $project->name = $req['name'];
                $project->person_id = $req['person_id'];
                $project->description = $req['description'];
                $project->link = $req['link'];
                $project->thumbnail = $req['thumbnail'];
                $project->save();

                $project->technologies()->sync($req['technologies']);
            }
            return response()->json(['message' => 'Projetos criados com sucesso'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar projetos', 'error' => $e->getMessage()], 500);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {

        try {
            return response()->json($project->load('technologies'), 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao exibir projeto', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {

        try {
            $project->name = $request->name;
            $project->person_id = $request->person_id;
            $project->description = $request->description;
            $project->link = $request->link;
            $project->thumbnail = $request->thumbnail;
            $project->save();

            $project->technologies()->sync($request->technologies);
            return response()->json($project->load('technologies'), 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao atualizar projeto', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        try {
            $project->technologies()->detach();
            $project->delete();
            return response()->json(['message' => 'Projeto deletado com sucesso'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao deletar projeto', 'error' => $e->getMessage()], 500);
        }
    }

    public function images($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => 'Projeto não encontrado'], 404);
        }

        try {
            $images = $project->images;
            if ($images->isEmpty()) {
                return response()->json(['message' => 'Nenhuma imagem encontrada para este projeto'], 404);
            }
            $formattedImages = $images->map(function ($image) {
                return [
                    'id' => $image->id,
                    'link' => $image->link
                ];
            });
            return response()->json($formattedImages, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao listar imagens do projeto', 'error' => $e->getMessage()], 500);
        }
    }
}
