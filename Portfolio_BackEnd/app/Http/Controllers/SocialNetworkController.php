<?php

namespace App\Http\Controllers;

use App\SocialNetwork;
use Illuminate\Http\Request;

class SocialNetworkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $socialNetworks = SocialNetwork::all();
            return response()->json($socialNetworks, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while trying to list the social networks.',
                'error' => $e->getMessage()
            ], 500);
        }
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
            $socialNetworks = [];

            foreach ($request->all() as $item) {
                $socialNetwork = new SocialNetwork;
                $socialNetwork->person_id = $item['person_id'];
                $socialNetwork->name = $item['name'];
                $socialNetwork->link = $item['link'];
                $socialNetwork->icon = $item['icon'];
                $socialNetwork->color = $item['color'];
                $socialNetwork->backColor = $item['backColor'];
                $socialNetwork->save();

                $socialNetworks[] = $socialNetwork;
            }

            return response()->json($socialNetworks, 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while trying to create the social network.',
                'error' => $e->getMessage()
            ], 500);
        }
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $socialNetwork = SocialNetwork::find($id);
            if ($socialNetwork) {
                return response()->json($socialNetwork, 200);
            }
            return response()->json([
                'message' => 'Social network not found.'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while trying to find the social network.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $socialNetwork = SocialNetwork::find($id);
            if ($socialNetwork) {
                $socialNetwork->delete();
                return response()->json([
                    'message' => 'Social network successfully deleted.'
                ], 200);
            }
            return response()->json([
                'message' => 'Social network not found.'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while trying to delete the social network.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display a listing of the resource by person_id.
     *
     * @param  int  $person_id
     * @return \Illuminate\Http\Response
     */
    public function getByPersonId($person_id)
    {
        try {
            $socialNetworks = SocialNetwork::where('person_id', $person_id)->get();
            return response()->json($socialNetworks, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while trying to list the social networks.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
