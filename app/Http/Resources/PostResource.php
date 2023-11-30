<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PostResource extends JsonResource
{
    private function getImageUrl($photo): string
    {
        $photoUrl = $photo;

        // Check if photo_url is not a full URL, then prepend storage URL
        if (!Str::startsWith($photoUrl, ['http://', 'https://'])) {
            $photoUrl = Storage::disk('public')->url($photoUrl);
        }

        return $photoUrl;
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'description' => $this->description,
            'photo' => $this->getImageUrl($this->photo_url),
            'content' => $this->content,
            'route' => route('posts.show', [$this->blog->slug, $this->slug]),
        ];
    }
}
