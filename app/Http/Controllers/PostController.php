<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class postController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $existingPosts = Post::paginate(5);
     
        return response()->json($existingPosts, 200);

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
        $newPost = new Post;

        $newPost->title = $request->Post['title'];
        $newPost->description = $request->Post['description'];
        $newPost->body = $request->Post['body'];

        $newPost->save();
        
        return response()->json($newPost, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $existingPost = Post::find($id);

        if($existingPost){
            return response()->json($existingPost, 200);
        }else{
            return response()->json("Post not found", 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $existingPost = Post::find($id);

        if($existingPost){
        $existingPost->title = $request->Post['title'];
        $existingPost->description = $request->Post['description'];
        $existingPost->body = $request->Post['body'];

        $existingPost->save();

        return response()->json($existingPost, 200);
        }else{
            return response()->json("Post not found", 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existingPost = Post::find($id);

        if($existingPost){
            $existingPost->delete();
            
            return response()->json("Post successfully deleted", 200);
        }else{
            return response()->json("Post not found", 404);
        }
    }
}
