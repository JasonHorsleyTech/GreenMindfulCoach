<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $imageId = $this->faker->numberBetween(1, 200);

        return [
            'blog_id' => BlogFactory::new(),
            'slug' => $this->faker->slug,
            'photo_url' => "https://picsum.photos/id/$imageId/400/400",
            'title' => $this->faker->name,
            'description' => $this->faker->text,
            'content' => $this->faker->text,
        ];
    }

    public function forBlog(Blog $blog): self
    {
        return $this->state([
            'blog_id' => $blog->id,
        ]);
    }
}
