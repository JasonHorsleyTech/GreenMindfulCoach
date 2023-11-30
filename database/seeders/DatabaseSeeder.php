<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Blog;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'developer',
            'email' => 'developer@example.com',
            'password' => bcrypt('password'),
            'is_admin' => true,
        ]);


        $blog = Blog::factory()->create([
            'name' => 'Smoothies and Juices',
            'slug' => 'smoothies-and-juices',
            'description' => 'Smoothies and Juices: A great way to get your daily dose of fruits and vegetables.',
            'photo_url' => asset('/images/example/smoothie-card.png'),
            'background_photo_url' => asset('/images/example/smoothie-bg.png'),
            'order' => 1,
        ]);
        Post::factory()->create([
            'blog_id' => $blog->id,
            'title' => 'Basic Green Smoothie',
            'slug' => 'basic-green-smoothie',
            'content' => "## Basic Green Smoothie\n It's easy to get started with green smoothies. Just follow this simple recipe and you'll be on your way to a healthier you!\n\n### Ingredients\n- 1 cup spinach\n- 1 cup water\n- 1 banana\n- 1 apple\n- 1/2 cup ice\n\n### Instructions\n1. Add all ingredients to blender\n2. Blend until smooth\n3. Enjoy!",
            'order' => 1
        ]);

        Post::factory()->create([
            'blog_id' => $blog->id,
            'title' => 'Strawberry Banana Smoothie',
            'slug' => 'strawberry-banana-smoothie',
            'content' => "## Strawberry Banana Smoothie\n This smoothie is a great way to start your day. It's packed with protein, fiber, and antioxidants.\n\n### Ingredients\n- 1 cup strawberries\n- 1 banana\n- 1/2 cup yogurt\n- 1/2 cup milk\n- 1/2 cup ice\n\n### Instructions\n1. Add all ingredients to blender\n2. Blend until smooth\n3. Enjoy!",
            'order' => 2
        ]);

        Post::factory()->create([
            'blog_id' => $blog->id,
            'title' => 'Blueberry Smoothie',
            'slug' => 'blueberry-smoothie',
            'content' => "## Blueberry Smoothie\n This smoothie is a great way to start your day. It's packed with protein, fiber, and antioxidants.\n\n### Ingredients\n- 1 cup blueberries\n- 1 banana\n- 1/2 cup yogurt\n- 1/2 cup milk\n- 1/2 cup ice\n\n### Instructions\n1. Add all ingredients to blender\n2. Blend until smooth\n3. Enjoy!",
        ]);

        // A bunch more.
        $blogNames = [
            'Reverse Diabetes Naturally',
            'Heart Healthy Habits',
            'Mindfulness and Wellness',
            'Eating for Energy',
            'Yoga and Fitness',
            'Healthy Gut, Healthy Mind',
            'Plant-Based Nutrition',
            'Stress-Free Living',
            'Natural Remedies Uncovered',
            'Healthy Aging and Longevity'
        ];

        foreach ($blogNames as $blogName) {
            $blog = Blog::factory()->create([
                'name' => $blogName,
            ]);

            for ($i = 0; $i < 4; $i++) {
                Post::factory()->forBlog($blog)->create([
                    'title' => "Post Title $i for $blogName",
                    // You can customize the content for each post here
                    'content' => "Content for Post $i of $blogName",
                ]);
            }
        }
    }
}
