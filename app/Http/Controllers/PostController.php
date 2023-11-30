<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\PostResource;
use App\Models\Blog;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use League\CommonMark\CommonMarkConverter;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog, Post $post)
    {
        $nextPost = Post::where('blog_id', $blog->id)
            ->where('order', '>', $post->order)
            ->orderBy('order', 'asc')
            ->first();

        $previousPost = Post::where('blog_id', $blog->id)
            ->where('order', '<', $post->order)
            ->orderBy('order', 'desc')
            ->first();

        return Inertia::render('PostShow', [
            'blog' => BlogResource::make($blog)->resolve(),
            'post' => PostResource::make($post)->resolve(),
            'nextPost' => $nextPost ? PostResource::make($nextPost)->resolve() : null,
            'previousPost' => $previousPost ? PostResource::make($previousPost)->resolve() : null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
