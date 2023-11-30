<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
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
            'name' => $this->faker->name,
            'slug' => $this->faker->slug,
            'description' => $this->faker->text,
            'photo_url' => "https://picsum.photos/id/$imageId/400/400",
            'background_photo_url' => "https://picsum.photos/id/$imageId/800/400",
            'order' => $this->faker->numberBetween(10, 100),
        ];
    }
}
