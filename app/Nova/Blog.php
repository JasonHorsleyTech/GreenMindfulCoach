<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Markdown;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\Url;

class Blog extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Blog>
     */
    public static $model = \App\Models\Blog::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable(),

            Text::make('Name')
                ->sortable()
                ->rules('required', 'max:255')
                ->help('Keep it short! A word or two.'),

            Text::make('Slug')
                ->hide()
                ->creationRules('unique:blogs,slug')
                ->updateRules('unique:blogs,slug,{{resourceId}}')
                ->fillUsing(function ($request, $model, $attribute, $requestAttribute) {
                    $model->{$attribute} = Str::slug($request->name);
                }),

            Number::make('Order')
                ->sortable()
                ->rules('required', 'max:255')
                ->default(1)
                ->help('Higher numbers will be displayed first.'),

            Markdown::make('Description')
                ->sortable()
                ->rules('required')
                ->help('A brief description of what the blog will be about.'),

            File::make('Photo', 'photo_url')
                ->disk('public')
                ->path('blogs')
                ->storeAs(function (Request $request) {
                    return $request->photo_url->getClientOriginalName();
                })
                ->prunable()
                ->rules('required', 'image:png,webp')
                ->help('A photo to represent the blog.'),

            HasMany::make('Posts')
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function lenses(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return [];
    }
}
