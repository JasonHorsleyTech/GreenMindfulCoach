<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Blog extends Model
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime',
    ];

    public function Posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
