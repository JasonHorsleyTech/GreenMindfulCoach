<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\PostResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::orderBy('order')->get();

        return Inertia::render('BlogIndex', [
            'blogs' => BlogResource::collection($blogs)->resolve(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        $posts = $blog->posts->sortBy('order');

        return Inertia::render('BlogShow', [
            'blog' => BlogResource::make($blog)->resolve(),
            'posts' => PostResource::collection($posts)->resolve(),
        ]);
    }
}
