<?php

namespace App\Nova;

use App\Rules\MarkdownFile;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\HasOne;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Markdown;
use Laravel\Nova\Http\Requests\NovaRequest;
use Illuminate\Support\Str;

class Post extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Post>
     */
    public static $model = \App\Models\Post::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

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
            BelongsTo::make('Blog')
                ->sortable()
                ->rules('required'),

            Text::make('Title')
                ->sortable()
                ->rules('required', 'max:255'),

            Text::make('Slug')
                ->hide()
                ->creationRules('unique:posts,slug')
                ->updateRules('unique:posts,slug,{{resourceId}}')
                ->fillUsing(function ($request, $model, $attribute, $requestAttribute) {
                    $model->{$attribute} = Str::slug($request->title);
                }),

            Markdown::make('Content')
                ->rules('required'),
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
