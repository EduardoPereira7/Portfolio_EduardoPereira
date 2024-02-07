<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'project_id', 'link'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
