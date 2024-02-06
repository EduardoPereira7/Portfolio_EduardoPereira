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
            $project = new Project();
            $project->name = $request->name;
            $project->person_id = $request->person_id;
            $project->description = $request->description;
            $project->link = $request->link;
            $project->thumbnail = $request->thumbnail;
            $project->save();

            $project->technologies()->sync($request->technologies);
            return response()->json($project->load('technologies'), 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar projeto', 'error' => $e->getMessage()], 500);
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
}
