<?php

namespace App\Http\Controllers;

use App\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            if (Person::all()->count() > 0) {
                $people = Person::with('technologies')->get();
                return response()->json($people, 200);
            } else {
                return response()->json(['message' => 'Nenhuma pessoa encontrada'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao listar pessoas', 'error' => $e->getMessage()], 500);
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
            $person = new Person();
            $person->name = $request->name;
            $person->status = $request->status;
            $person->description = $request->description;
            $person->email = $request->email;
            $person->photo = $request->photo;
            $person->phone = $request->phone;
            $person->linkedin = $request->linkedin;
            $person->github = $request->github;
            $person->certifications = $request->certifications;
            $person->languages = $request->languages;
            $person->save();

            $technologiesWithLevels = [];
            foreach ($request->technologies as $technologyId) {
                $level = $request->input("technology_levels.$technologyId", 1);

                $technologiesWithLevels[$technologyId] = ['level' => $level];
            }

            $person->technologies()->sync($technologiesWithLevels);

            return response()->json($person->load('technologies'), 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar pessoa', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function show(Person $person)
    {
        try {
            return response()->json($person->load('technologies'), 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao exibir pessoa', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function edit(Person $person)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Person $person)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy(Person $person)
    {
        try {
            $person->delete();
            return response()->json(['message' => 'Pessoa excluída com sucesso'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao excluir pessoa', 'error' => $e->getMessage()], 500);
        }
    }

    public function projects(Person $person)
    {
        try {
            $projects = $person->projects()->with('technologies')->get();

            if ($projects->isEmpty()) {
                return response()->json(['message' => 'Nenhum projeto encontrado para esta pessoa'], 404);
            }

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

            return response()->json($formattedProjects, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao buscar projetos da pessoa', 'error' => $e->getMessage()], 500);
        }
    }
}
