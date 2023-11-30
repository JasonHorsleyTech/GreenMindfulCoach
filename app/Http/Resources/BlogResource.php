<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlogResource extends JsonResource
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
     * @param  Request  $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $photoUrl = $this->getImageUrl($this->photo_url);
        $bgPhotoUrl = $this->getImageUrl($this->background_photo_url);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'slug' => $this->slug,
            'photo' => $photoUrl,
            'background_photo' => $bgPhotoUrl,
            'published_at' => $this->created_at->format('d-m-Y'),
            'route' => route('blogs.show', $this->slug),
        ];
    }
}
