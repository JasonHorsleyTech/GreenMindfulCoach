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
                ->help('3-5 words'),

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

            Text::make('Description')
                ->sortable()
                ->rules('required')
                ->help('3-5 sentences'),

            File::make('Card photo', 'photo_url')
                ->disk('public')
                ->path('blogs')
                ->storeAs(function (Request $request) {
                    return $request->photo_url->getClientOriginalName();
                })
                ->prunable()
                ->rules('image:png,webp')
                ->help('Displayed inside "card", on the "list of all blogs" page.'),

            File::make('Background photo', 'background_photo_url')
                ->disk('public')
                ->path('blogs')
                ->storeAs(function (Request $request) {
                    return $request->background_photo_url->getClientOriginalName();
                })
                ->prunable()
                ->rules('image:png,webp')
                ->help('Displayed as background, on the "list of all blog *posts*" page.'),

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
